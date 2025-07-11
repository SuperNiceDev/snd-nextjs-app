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
              className="border px-2"
              placeholder="InputText prop placeholder test"
              // value="InputText prop value test"
            />
          </div>
          <code>{`</InputText>`}</code>
        </div>

        <div className="">
          <UseDidMountEffectDemo className="text-white_ rounded-sm bg-fuchsia-800 px-3 py-1 text-gray-100" />
        </div>
      </div>

      <code>{`</SndReactLibComponents>`}</code>
    </div>
  );
}
