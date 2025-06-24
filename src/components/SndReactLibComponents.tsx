"use client";

import React from "react";

import InputText from "snd-react-lib/components/atoms/InputText";
import Text from "snd-react-lib/components/atoms/Text";
import UseDidMountEffectDemo from "snd-react-lib/stories/hooks/UseDidMountEffect.stories/UseDidMountEffectDemo";

export default function SndReactLibComponents() {
  return (
    <div className="SndReactLibComponents twCenterContent">
      <code>{`<SndReactLibComponents>`}</code>

      <div className="px-4">
        <div className="mb-2">
          <code>{`<Text>`}</code>
          <Text className="text-fuchsia-800_" text="Text prop text test" />
          <code>{`</Text>`}</code>
        </div>

        <div className="mb-2">
          <code>{`<InputText>`}</code>
          <div>
            <InputText
              className="px-2 text-fuchsia-800_ bg-gray-800_ border border-fuchsia-800_"
              placeholder="InputText prop placeholder test"
              // value="InputText prop value test"
            />
          </div>
          <code>{`</InputText>`}</code>
        </div>

        <div className="">
          <UseDidMountEffectDemo />
        </div>
      </div>

      <code>{`</SndReactLibComponents>`}</code>
    </div>
  );
}
