import paramiko
import os
import pathlib
import sys

host = os.environ["SFTP_HOST"]
user = os.environ["SFTP_USER"]
password = os.environ["SFTP_PASS"]
remote = os.environ["SFTP_DIR"].rstrip("/")
local = pathlib.Path("./out")

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect(host, port=22, username=user, password=password, timeout=30)
sftp = client.open_sftp()


def ensure_dir(path):
    try:
        sftp.stat(path)
    except IOError:
        sftp.mkdir(path)


def upload_dir(local_path, remote_path):
    ensure_dir(remote_path)
    for item in sorted(local_path.iterdir()):
        r = remote_path + "/" + item.name
        if item.is_dir():
            upload_dir(item, r)
        else:
            sys.stdout.write("  " + str(item.relative_to(local)) + "\n")
            sys.stdout.flush()
            sftp.put(str(item), r)


print("Deploying ./out/ -> " + remote + "/")
upload_dir(local, remote)
sftp.close()
client.close()
print("Deploy complete!")
