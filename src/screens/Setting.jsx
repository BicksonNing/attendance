import { DocumentIcon, LoginIcon, SaveAsIcon } from "@heroicons/react/outline";
import React from "react";
import { CustomButton, CustomInput } from "../components";

const Setting = () => {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-16">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">SMTP</h2>
          <div className="space-y-3">
            {/* host */}
            <div className="space-y-2">
              <p className="font-semibold text-sm">Host Url</p>
              <div className="bg-white/30 backdrop-blur-md px-5 py-4 rounded-lg flex items-center justify-between">
                <CustomInput
                  // icon={<MailIcon />}
                  inputType="text"
                  placeHolder="e.g. https://www.example.com"
                />
              </div>
            </div>

            {/* username */}
            <div className="space-y-2">
              <p className="font-semibold text-sm">Username</p>
              <div className="bg-white/30 backdrop-blur-md px-5 py-4 rounded-lg flex items-center justify-between">
                <CustomInput
                  // icon={<MailIcon />}
                  inputType="text"
                  placeHolder="Enter SMTP username"
                />
              </div>
            </div>

            {/* password */}
            <div className="space-y-2">
              <p className="font-semibold text-sm">Password</p>
              <div className="bg-white/30 backdrop-blur-md px-5 py-4 rounded-lg flex items-center justify-between">
                <CustomInput
                  // icon={<MailIcon />}
                  inputType="password"
                  placeHolder="Enter SMTP password"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">SMS</h2>

            <div className="space-y-3">
              {/* sender id */}
              <div className="space-y-2">
                <p className="font-semibold text-sm">Sender ID</p>
                <div className="bg-white/30 backdrop-blur-md px-5 py-4 rounded-lg flex items-center justify-between">
                  <CustomInput
                    // icon={<MailIcon />}
                    inputType="text"
                    placeHolder="Enter SMS sender Id"
                  />
                </div>
              </div>
              {/* template id */}
              <div className="space-y-2">
                <p className="font-semibold text-sm">Template ID</p>
                <div className="bg-white/30 backdrop-blur-md px-5 py-4 rounded-lg flex items-center justify-between">
                  <CustomInput
                    // icon={<MailIcon />}
                    inputType="text"
                    placeHolder="Enter SMS template Id"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">WhatsApp</h2>

            <div className="">
              {/* access token */}
              <div className="space-y-2">
                <p className="font-semibold text-sm">Access Token</p>
                <div className="bg-white/30 backdrop-blur-md px-5 py-4 rounded-lg flex items-center justify-between">
                  <CustomInput
                    // icon={<MailIcon />}
                    inputType="text"
                    placeHolder="e.g. sdfiuyaer763q4gasdjhgf7432yrgjhg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomButton
        py="py-[12px]"
        title="Save"
        icon={<DocumentIcon />}
        width="w-36"
      />
    </div>
  );
};

export default Setting;
