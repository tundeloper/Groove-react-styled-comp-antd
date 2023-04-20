import React from "react";
import { Space } from "antd";
import { Section } from "../../global/section";
import { PlaylistCard } from "./card";
import { Label } from "../../global/label";

export default function PlaylistGroup() {
  return (
    <div>
      <Space direction="vertical" size={[0, 2]}>
        <div>
          <Section p="10">
            <Label>Welcome back</Label>
            <Section as="div" w="100vw - 16%" overflow={"true"}>
              <PlaylistCard />
            </Section>
          </Section>
        </div>
        <div>
          <Section as="div" p="10">
            <Label>Cheers to the Weekend</Label>
            <Section as="div" w="100vw - 16%" overflow={"true"}>
              <PlaylistCard />
            </Section>
          </Section>
        </div>
      </Space>
    </div>
  );
}
