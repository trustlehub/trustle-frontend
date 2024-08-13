# Trustle Backend Server

## Create/Edit `.env` file

The meaning of each variable can be found below: 

- `BASE_URL`: the backend url
- `CRONBASE_URL`: the cron master url
<br />

---

### Set up environment on the operating system

> Linux, MacOs 

1. Open a terminal on your Linux system.
2. Run the following command to add the Yarn repository to your package manager:
   ```shell
   curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
   ```
   This command will download and execute the installation script for Yarn.
3. Once the installation script completes, close the terminal and reopen it.
4. Verify that Yarn is installed by running the following command:
   ```shell
   yarn --version
   ```
   If the installation was successful, you should see the version number of Yarn displayed.

<br />

> CentOS/RHEL

1. Open a terminal on your CentOS system.
2. Install Node.js and npm by running the following commands:
   ```shell
   sudo yum update
   sudo yum install epel-release
   sudo yum install nodejs
   ```
3. Install Yarn using npm by running the following command:
   ```shell
   sudo npm install -g yarn
   ```
4. Verify that Yarn is installed by running the following command:
   ```shell
   yarn --version
   ```
   If the installation was successful, you should see the version number of Yarn displayed.

<br />

> Windows

1. Go to the Yarn website (https://classic.yarnpkg.com/latest.msi) and download the latest stable release MSI installer.
2. Run the downloaded MSI installer and follow the installation wizard's instructions.
3. After installation, open a new command prompt or PowerShell window.
4. Verify that Yarn is installed by running the following command:
   ```shell
   yarn --version
   ```
   If the installation was successful, you should see the version number of Yarn displayed.

<br />

---

### Start project

<br />

> Start the app via `yarn`

```bash
$ yarn dev
```

> Start the app via `npm`

```bash
$ npm run dev
```

At this point, the app runs at `http://127.0.0.1:3000/` locally. 

<br />

---

### Build the project

<br />

> Build the app via `yarn`

```bash
$ yarn build
```

> Build the app via `npm`

```bash
$ npm run build
```

<br />

---

### Start development project

<br />

> Start the app as development mode via `npm`

```bash
$ npm run dev
```

At this point, the app runs at `http://127.0.0.1:3000/` locally. 

<br />

---

### Version Information

- Node.js version: 18.15.0
- React version: 18.2.0