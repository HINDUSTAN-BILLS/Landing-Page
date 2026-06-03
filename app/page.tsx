"use client";
import { motion } from "framer-motion";
import ScrollytellingFeatures from "./components/ScrollytellingFeatures";
import ScrollUnderline from "./components/ScrollUnderline";
import HeroDashboard from "./components/HeroDashboard";
import ScrollCards from "./components/ScrollCards";
import IndiaMap from "./components/IndiaMap";
const imgHtmlLastPublishedSunJan052025075152Gmt0000CoordinatedUniversalTimeBody =
  "unknown";
const imgReadyCalendarScreen =
  "https://www.figma.com/api/mcp/asset/d620ed7b-b585-4bd0-b23e-21a5ac5d5090";
const imgPosterWebp =
  "https://www.figma.com/api/mcp/asset/84550861-e2e7-4a27-a0ed-2556d836c355";
const imgTeamMeetingWebp =
  "https://www.figma.com/api/mcp/asset/5d476fe7-fd44-4d77-9955-2ac58ee7c61b";
const imgFebbyAugustineWebp =
  "https://www.figma.com/api/mcp/asset/94b0c818-6a14-47db-89c2-8e57c9a90cbb";
const imgAllHandsP800Webp =
  "https://www.figma.com/api/mcp/asset/9ae1cf6a-3418-4e33-8678-b086754d1523";
const imgProjKickoffWebp =
  "https://www.figma.com/api/mcp/asset/5b7f391e-9e5e-4b19-af6e-dfbed09c344d";
const imgBackground1 =
  "https://www.figma.com/api/mcp/asset/da48c886-4e5f-4072-a993-49f9953dcc3e";
const imgTemplatesWebp =
  "https://www.figma.com/api/mcp/asset/8d342588-8fc4-4ded-80c1-bdc71bddd87e";
const imgBackground2 =
  "https://www.figma.com/api/mcp/asset/02f866e9-591d-4ab6-a6c6-8affc8b6b867";
const imgPowerfulToolsWebp =
  "https://www.figma.com/api/mcp/asset/9a061b35-1f9f-4d11-8599-7a23b7505b34";
const imgBackground3 =
  "https://www.figma.com/api/mcp/asset/18a8bce3-9e37-460c-8a7f-e6a082a7ed0c";
const imgTasksWebp =
  "https://www.figma.com/api/mcp/asset/8fa393d1-9836-4e6c-8106-0a7bfeea3d43";
const imgBackground4 =
  "https://www.figma.com/api/mcp/asset/56565aeb-8230-4f22-8db0-180d91926892";
const imgTimeTravelWebp =
  "https://www.figma.com/api/mcp/asset/6f0228aa-87aa-4bc6-8f93-534591f719c9";
const imgBackground5 =
  "https://www.figma.com/api/mcp/asset/e3942bd0-e099-4068-8555-63a6f79919b1";
const imgTaskSidebarWebp =
  "https://www.figma.com/api/mcp/asset/b1cc7be6-3a3e-423a-a89f-3a888b88d736";
const imgBackground6 =
  "https://www.figma.com/api/mcp/asset/c7ad96aa-c8db-4acf-a64c-a3704b4b6a80";
const imgThreadsWebp =
  "https://www.figma.com/api/mcp/asset/3cbcabb9-7f65-4d73-b990-76c2d7c3ed8b";
const imgCalendarFooterWebp =
  "https://www.figma.com/api/mcp/asset/ebd8f643-0ca0-4eee-a7ca-b3998018d5f5";
const imgAppIconWebp = "unknown";
const imgNav = "unknown";
const imgJuliesAvatar = "unknown";
const imgAugustinesAvatar = "unknown";
const imgFebbysAvatar = "unknown";
const imgJunniesAvatar = "unknown";
const imgDeercembersAvatar = "unknown";
const imgBackground =
  "https://www.figma.com/api/mcp/asset/dd37ebe5-a6f4-424c-9545-b925b30f98f9";
const imgVector =
  "https://www.figma.com/api/mcp/asset/49dfbd5b-1f00-4628-ad71-c60b4c5eb5b6";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/c5aa673b-4eca-4604-96ac-073f6997a01e";
const imgVector2 =
  "https://www.figma.com/api/mcp/asset/587db9f2-8018-4852-a586-d754dac7db57";
const imgVector3 =
  "https://www.figma.com/api/mcp/asset/ce8d9449-7586-43ba-aa0b-148fd58aa5cb";
const imgVector4 =
  "https://www.figma.com/api/mcp/asset/b42c0d1a-4bf0-4b51-bf95-3688aff6bfce";
const imgVector5 =
  "https://www.figma.com/api/mcp/asset/bed71895-d0a3-4a75-8494-9e2b3d014b80";
const imgClipPathGroup =
  "https://www.figma.com/api/mcp/asset/efa4c73d-0853-472d-add7-78bf083d3fe7";
const imgVector6 =
  "https://www.figma.com/api/mcp/asset/2ce032da-e0e8-4d95-bcf9-6d1c40723175";
const imgVector7 =
  "https://www.figma.com/api/mcp/asset/7b87fc81-eafe-4961-bc1f-2ff97ca8daf3";
const imgSquiggleUpgrades1Svg =
  "https://www.figma.com/api/mcp/asset/1a9f9df4-f37e-4c86-8502-7f2b9ed37644";
const imgSquiggleUpgrades3Svg =
  "https://www.figma.com/api/mcp/asset/d874501e-4835-459d-b881-f854ac5868ed";
const imgSquiggleUpgrades2Svg =
  "https://www.figma.com/api/mcp/asset/ce6a3d31-9f87-43fb-9908-e384188c8e18";
const imgVector8 =
  "https://www.figma.com/api/mcp/asset/f0cdc8fc-e0fb-4dc8-b181-528ad4527d5f";
const imgSquiggleLeave1Svg =
  "https://www.figma.com/api/mcp/asset/170adab9-d2ba-4148-8da8-3f162a9efc65";
const imgSquiggleLeave3Svg =
  "https://www.figma.com/api/mcp/asset/4b4ecca0-6189-43c1-8c79-6704ea5797fd";
const imgSquiggleLeave2Svg =
  "https://www.figma.com/api/mcp/asset/1c014cb5-b011-4db6-9c51-4fd9a1d41a86";
const imgVector9 =
  "https://www.figma.com/api/mcp/asset/5995bb69-3359-43cb-9ea2-6abbaec0ba11";
const imgVector10 =
  "https://www.figma.com/api/mcp/asset/c0a851bc-31d9-4f20-be3c-14f683e5edfc";
const imgVector11 =
  "https://www.figma.com/api/mcp/asset/a0d3479c-f1b3-4792-b6a3-f75fd8816856";
const imgVector12 =
  "https://www.figma.com/api/mcp/asset/228683b5-8bc9-4551-84ef-9fb48f640778";
const imgVector13 =
  "https://www.figma.com/api/mcp/asset/b5320622-303d-41c3-b9e7-51a8b2981ed7";
const imgVector14 =
  "https://www.figma.com/api/mcp/asset/a92d8502-d4f9-4ade-a9d3-a058a780892b";
const imgClipPathGroup1 =
  "https://www.figma.com/api/mcp/asset/ff7ff9ea-5516-4f1a-99e4-ce7d868ec556";
const imgTwitterSvg =
  "https://www.figma.com/api/mcp/asset/2a456f14-030a-4f5b-ad86-9f4bc5ee61a1";
const imgLinkedinSvg =
  "https://www.figma.com/api/mcp/asset/02c636e1-b8ee-47f1-8540-61000ec03acd";
const imgReadyLogo1Svg =
  "https://www.figma.com/api/mcp/asset/4289f4b9-dfa1-48ed-95d0-ccbca3a99918";
const imgSvg =
  "https://www.figma.com/api/mcp/asset/f88bd75d-b45c-4923-be96-65e2b3f9fc73";
export default function HtmlLastPublishedSunJan052025075152Gmt0000CoordinatedUniversalTimeBody() {
  return (
    <div
      className="bg-[#FDFBF7] relative w-full"
      data-node-id="1:2"
      data-name="Html - Last Published: Sun Jan 05 2025 07:51:52 GMT+0000 (Coordinated Universal Time) → Body"
    >
      {/* Modern Checkers / Grid Background for Hero */}
      <div className="absolute inset-x-0 top-0 h-[800px] w-full pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      <div
        className="absolute z-10 content-stretch flex flex-col gap-[96px] items-center left-0 pt-[128px] px-[16px] right-0 top-[48px]"
        data-node-id="1:3"
        data-name="Container"
      >
        <div
          className="h-[264px] max-w-[640px] relative shrink-0 w-[640px]"
          data-node-id="1:4"
          data-name="Container"
        >
          <div
            className="absolute content-stretch flex flex-col inset-[0_0_232px_0] items-start justify-center pb-[16px]"
            data-node-id="1:5"
            data-name="Margin"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full"
              data-node-id="1:6"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['GT_America_Standard:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#7366fe] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap"
                data-node-id="1:7"
              >
                <p className="leading-[16px]">
                  YOUR GTM STRATEGY, SUPERCHARGED
                </p>
              </div>
            </div>
          </div>
          <div
            className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-center left-1/2 max-w-[400px] px-[16.29px] top-[192px]"
            data-node-id="1:8"
            data-name="Container"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['GT_America_Standard:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[18px] text-center whitespace-nowrap"
              data-node-id="1:9"
            >
              <p className="leading-[24px] mb-0">
                The only AI-powered Go-To-Market Operating System that
                transforms
              </p>
              <p className="leading-[24px] mb-0">
                retail intelligence into your exact launch
                sequence.
              </p>
              <p className="leading-[24px]">
                Know precisely where to expand, which distributors to appoint,
                and where revenue is leaking.
              </p>
            </div>
          </div>
          <div
            className="absolute bottom-[72px] content-stretch flex flex-col items-start justify-center left-[50px] max-w-[540px] pb-[32px] top-[32px] w-[540px]"
            data-node-id="1:10"
            data-name="Margin"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[540px] min-h-px relative w-[540px]"
              data-node-id="1:11"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                data-node-id="1:12"
                data-name="Heading 1"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['GT_Walsheim:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[64px] text-center whitespace-nowrap"
                  data-node-id="1:13"
                >
                  <p className="leading-[64px]">AI-powered market intelligence</p>
                </div>
              </div>
              <motion.div
                className="absolute bg-[rgba(115,102,254,0.25)] bottom-0 content-stretch flex flex-col h-[64px] items-end justify-center left-[128px] rounded-bl-[12px] rounded-tl-[12px] w-[418px]"
                data-node-id="1:14"
                data-name="Overlay"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={{ originX: 0 }}
              >
                <div
                  className="bg-[#7366fe] flex-[1_0_0] min-h-px relative rounded-bl-[8px] rounded-br-[8px] w-[4px]"
                  data-node-id="1:15"
                  data-name="Background"
                >
                  <div
                    className="absolute bg-[#7366fe] content-stretch flex flex-col items-start left-0 px-[8px] py-[2px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] top-[-28px]"
                    data-node-id="1:16"
                    data-name="Background"
                  >
                    <div
                      className="content-stretch flex flex-col items-center relative shrink-0"
                      data-node-id="1:17"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['GT_America_Standard:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
                        data-node-id="1:18"
                      >
                        <p className="leading-[24px]">Pulse</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="content-stretch flex flex-col items-center justify-center relative shrink-0 z-20 mt-4"
                data-node-id="1:19"
                data-name="Heading 1"
              >
                <div className="relative inline-block">
                  <div
                    className="[word-break:break-word] flex flex-col font-['GT_Walsheim:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[64px] text-center whitespace-nowrap"
                    data-node-id="1:20"
                  >
                    <p className="leading-[64px]">
                      for consumer brands.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <HeroDashboard />
      </div>
      <div
        className="absolute content-stretch flex flex-col items-center justify-center left-0 pb-[48px] right-0 top-[1443px]"
        data-node-id="1:64"
        data-name="Container"
      >
        <div
          className="content-stretch flex flex-col h-[284px] items-start justify-center min-w-[640px] px-[440.4px] relative shrink-0 w-full"
          data-node-id="1:65"
          data-name="Margin"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center max-w-[640px] min-h-px pt-[20px] relative w-full"
            data-node-id="1:66"
            data-name="Container"
          >
            <div
              className="content-stretch flex flex-col h-[168px] items-center px-[97.54px] relative shrink-0"
              data-node-id="1:67"
              data-name="Heading 2"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['GT_Walsheim:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[56px] text-center whitespace-nowrap"
                data-node-id="1:68"
              >
                <p className="leading-[56px] mb-0">A superpowered market</p>
                <p className="leading-[56px] mb-0">expansion in every</p>
                <p className="leading-[56px]">strategic decision</p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col h-[72px] items-center justify-center min-w-[480px] px-[80px] relative shrink-0 w-[640px]"
              data-node-id="1:69"
              data-name="Margin"
            >
              <div
                className="content-stretch flex flex-[1_0_0] flex-col items-center max-w-[480px] min-h-px pl-[14.25px] pr-[14.26px] relative"
                data-node-id="1:70"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['GT_America_Standard:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[18px] text-center whitespace-nowrap"
                  data-node-id="1:71"
                >
                  <p className="leading-[24px] mb-0">
                    From AI-powered market analysis to board-ready playbooks,
                  </p>
                  <p className="leading-[24px] mb-0">
                    Pulse delivers the strategic clarity previously available
                    only to
                  </p>
                  <p className="leading-[24px]">
                    Fortune 500 companies—with the speed and agility early-stage
                    brands demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollCards />
      </div>
      {/* Spacer to push flow content below the absolute-positioned hero */}
      <div style={{ height: "2447px" }} aria-hidden />
      {/* Scrollytelling Features Section */}
      <ScrollytellingFeatures />
      <div className="relative content-stretch flex flex-col gap-[32px] items-center w-full pt-[80px] pb-[16px] px-[16px]"
        data-node-id="1:195"
        data-name="Background"
      >
        <div className="flex flex-col items-center max-w-[640px] text-center">
          <p className="font-['GT_America_Standard:Regular'] text-[#333] text-[18px] leading-[24px]">
            Pulse is the AI GTM Operating System that transforms how D2C
            brands expand. From pincode-level market viability scoring to
            AI-powered distributor matching.
          </p>
        </div>

        <div
          className="content-stretch flex flex-col items-center relative shrink-0"
          data-node-id="1:227"
          data-name="Heading 2"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['GT_Walsheim:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[56px] text-center whitespace-nowrap"
            data-node-id="1:228"
          >
            <p className="leading-[56px] mb-0">No spreadsheet paralysis.</p>
            <p className="leading-[56px]">No guesswork. Just <ScrollUnderline variant="zigzag" color="#e85d04">precision.</ScrollUnderline></p>
          </div>
        </div>

        {/* 3D India Map replacing calendar image */}
        <div className="w-full flex justify-center mt-6">
          <IndiaMap />
        </div>
      </div>
      <div className="relative content-stretch flex items-start justify-center w-full pt-[16px] px-[16px]"
        data-node-id="1:244"
        data-name="Container"
      >
        <div
          className="content-stretch flex flex-col isolate items-center justify-center max-w-[640px] relative self-stretch shrink-0 w-[640px]"
          data-node-id="1:245"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col h-[160px] items-start justify-center pb-[48px] relative shrink-0 z-[2]"
            data-node-id="1:246"
            data-name="Margin"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative"
              data-node-id="1:247"
              data-name="Container"
            >
              <div
                className="absolute content-stretch flex flex-col inset-[-35%] items-start justify-center"
                data-node-id="1:248"
                data-name="Container"
                style={{ display: "none" }}
              >
                <div
                  className="flex-[1_0_0] min-h-px overflow-clip relative w-full"
                  data-node-id="1:249"
                  data-name="SVG"
                >
                  <div
                    className="absolute inset-[0_14.14%]"
                    data-node-id="1:250"
                    data-name="Clip path group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgClipPathGroup1}
                    />
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                data-node-id="1:257"
                data-name="Heading 2"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['GT_Walsheim:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[56px] text-center whitespace-nowrap"
                  data-node-id="1:258"
                >
                  <p className="leading-[56px]">{`It's time to expand with `}<ScrollUnderline variant="circle" color="#7366fe">precision</ScrollUnderline></p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                data-node-id="1:259"
                data-name="Heading 2"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['GT_Walsheim:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[56px] text-center whitespace-nowrap"
                  data-node-id="1:260"
                >
                  <p className="leading-[56px]">Get Pulse</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col h-[120px] items-center justify-center min-w-[480px] px-[80px] relative shrink-0 w-[640px] z-[1]"
            data-node-id="1:261"
            data-name="Margin"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['GT_America_Standard:Regular'] gap-[24px] items-center leading-[0] max-w-[480px] min-h-px not-italic px-[5.6px] relative text-[#333] text-[18px] text-center whitespace-nowrap"
              data-node-id="1:262"
              data-name="Paragraph"
            >
              <div
                className="flex flex-col justify-center relative shrink-0"
                data-node-id="1:263"
              >
                <p className="leading-[24px] mb-0">
                  Every day your startup delays GTM clarity, a competitor gets
                  faster. Your
                </p>
                <p className="leading-[24px]">
                  board expects board-ready insights, not spreadsheet chaos.
                </p>
              </div>
              <div
                className="flex flex-col justify-center relative shrink-0"
                data-node-id="1:264"
              >
                <p className="leading-[24px] mb-0">
                  Get Pulse, and never expand without a playbook again. Let's
                  build
                </p>
                <p className="leading-[24px]">market dominance, together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative content-stretch flex h-[216px] items-start justify-center w-full pb-[48px] pt-[120px] px-[16px]"
        data-node-id="1:265"
        data-name="Container"
      >
        <div
          className="content-stretch flex h-full items-start justify-center max-w-[1280px] relative shrink-0 w-[1280px]"
          data-node-id="1:266"
          data-name="Container"
        >
          <div
            className="flex-[1_0_0] h-full min-w-px relative"
            data-node-id="1:267"
            data-name="Container"
          >
            <div
              className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-14px)]"
              data-node-id="1:268"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['GT_America_Standard:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap"
                data-node-id="1:269"
              >
                <p className="leading-[20px]">
                  Pulse — Built for D2C founders
                </p>
              </div>
            </div>
            <div
              className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] right-0 top-[20px]"
              data-node-id="1:270"
              data-name="Margin"
            >
              <div
                className="content-stretch flex gap-[8px] items-start justify-center pr-[441.37px] relative shrink-0 w-full"
                data-node-id="1:271"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[86.1px]"
                  data-node-id="1:272"
                  data-name="Link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['GT_America_Standard:Light'] justify-center leading-[0] not-italic relative shrink-0 text-[#8b8c96] text-[14px] whitespace-nowrap"
                    data-node-id="1:273"
                  >
                    <p className="leading-[20px]">Privacy Policy</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[104.53px]"
                  data-node-id="1:274"
                  data-name="Link"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['GT_America_Standard:Light'] justify-center leading-[0] not-italic relative shrink-0 text-[#8b8c96] text-[14px] whitespace-nowrap"
                    data-node-id="1:275"
                  >
                    <p className="leading-[20px]">Terms of Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute content-stretch flex flex-col items-start left-[154.11px] pl-[4px] top-[10px]"
              data-node-id="1:276"
              data-name="Margin"
            >
              <div
                className="[word-break:break-word] font-['GT_America_Standard:Regular'] leading-[0] not-italic relative shrink-0 size-0 text-[#333] text-[14px] whitespace-nowrap"
                data-node-id="1:277"
                data-name="Paragraph"
              >
                <div
                  className="-translate-y-1/2 absolute flex flex-col justify-center left-0 opacity-35 top-0"
                  data-node-id="1:278"
                >
                  <p className="leading-[20px]">🌎</p>
                </div>
                <div
                  className="-translate-y-1/2 absolute flex flex-col justify-center left-0 opacity-65 top-0"
                  data-node-id="1:279"
                >
                  <p className="leading-[20px]">🌍</p>
                </div>
                <div
                  className="-translate-y-1/2 absolute flex flex-col justify-center left-0 opacity-0 top-0"
                  data-node-id="1:280"
                >
                  <p className="leading-[20px]">🌏</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] h-full items-start justify-end min-w-px relative"
            data-node-id="1:281"
            data-name="Container"
          >
            <div
              className="content-stretch flex gap-[16px] h-full items-start relative shrink-0"
              data-node-id="1:282"
              data-name="Container"
            >
              <div
                className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[24px]"
                data-node-id="1:283"
                data-name="Link"
              >
                <div
                  className="content-stretch flex flex-col items-center justify-center max-w-[24px] overflow-clip relative shrink-0"
                  data-node-id="1:284"
                  data-name="Twitter"
                >
                  <div
                    className="relative shrink-0 size-[16px]"
                    data-node-id="1:285"
                    data-name="twitter.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgTwitterSvg}
                    />
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[24px]"
                data-node-id="1:287"
                data-name="Link"
              >
                <div
                  className="content-stretch flex flex-col items-center justify-center max-w-[24px] overflow-clip relative shrink-0"
                  data-node-id="1:288"
                  data-name="Linkedin"
                >
                  <div
                    className="overflow-clip relative shrink-0 size-[16px]"
                    data-node-id="1:289"
                    data-name="linkedin.svg"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgLinkedinSvg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed z-50 backdrop-blur-[8px] bg-size-[200px_200px] bg-top-left border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid content-stretch flex h-[48px] items-center justify-center left-0 pb-[0.8px] px-[16px] right-0 top-0"
        data-node-id="1:293"
        style={{ backgroundImage: `url("${imgNav}")` }}
        data-name="Nav"
      >
        <div
          className="max-w-[1280px] relative shrink-0 w-[1280px]"
          data-node-id="1:294"
          data-name="Container"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
            <a
              href="#"
              className="font-['GT_Walsheim:Bold'] font-black text-[22px] text-[#1e293b] tracking-tight hover:text-[#5c6ae4] transition-colors duration-300 flex items-center gap-1.5"
            >
              Pulse
            </a>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:hello@pulse.ai" 
                className="text-[11px] font-bold text-[#5c6ae4] uppercase tracking-widest border border-[rgba(92,106,228,0.25)] rounded-full px-4 py-1.5 hover:bg-[#5c6ae4] hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
