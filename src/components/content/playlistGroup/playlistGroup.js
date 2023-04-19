import React from "react";
import { Space } from "antd";
import { Section } from "../../global/section";
import { PlaylistCard } from "./card";

export default function PlaylistGroup() {
  return (
    <div>
      <Space direction="vertical" size={[0, 15]}>
        <div>
          <Section p="10">
            <h1 style={{ marginBottom: "1rem" }}>Welcome back</h1>

            <Section as="div" w="100vw - 16%" overflow={"true"}>
              <PlaylistCard />
            </Section>
          </Section>
        </div>
        <div>
          <Section as="div" p="10">
            <h1 style={{ marginBottom: "1rem" }}>Welcome back</h1>
            <Section as="div" w="100vw - 16%" overflow={"true"}>
              <PlaylistCard />
            </Section>
          </Section>
        </div>
      </Space>
    </div>
  );
}
