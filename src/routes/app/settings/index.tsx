import { FTPConfiguration } from "./ftp-configuration";

export const Settings = () => {
  return (
    <main className="p-8 space-y-8">
      <div>
        <h1 className="font-black">Settings</h1>
        <p>Configure your system integrations and server connections.</p>
      </div>

      <FTPConfiguration />
    </main>
  );
};
