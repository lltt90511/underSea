<GameFile>
  <PropertyGroup Name="fruit_machine" Type="Layer" ID="6c1572ed-0be7-4558-a429-c4a19f3672e1" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="UiEntity29622330" Tag="3" ctype="GameLayerObjectData">
        <Size X="1080.0000" Y="1920.0000" />
        <Children>
          <AbstractNodeData Name="Panel_14" ActionTag="-1" Tag="3" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="0" ComboBoxIndex="1" ColorAngle="270.0000" ctype="PanelObjectData">
            <Size X="1080.0000" Y="1920.0000" />
            <Children>
              <AbstractNodeData Name="bottom_bg" ActionTag="19794519" ZOrder="1" IsAutoSize="True" Tag="5" IconVisible="False" ctype="ImageViewObjectData">
                <Size X="1080.0000" Y="708.0000" />
                <Children>
                  <AbstractNodeData Name="change_btn" ActionTag="23200373" IsAutoSize="True" Tag="6" IconVisible="False" TouchEnable="True" FontSize="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="219.0000" Y="76.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="186.0000" Y="596.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.3278" Y="0.3418" />
                    <PreSize X="0.2028" Y="0.1073" />
                    <TextColor A="255" R="255" G="255" B="255" />
                    <PressedFileData Type="Normal" Path="qietu/common/qh001.png" Plist="" />
                    <NormalFileData Type="Normal" Path="qietu/common/qh001b.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="repeat_btn" ActionTag="6300983" IsAutoSize="True" Tag="8" IconVisible="False" TouchEnable="True" FontSize="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="242.0000" Y="83.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="542.0000" Y="645.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.0019" Y="0.4110" />
                    <PreSize X="0.2241" Y="0.1172" />
                    <TextColor A="255" R="255" G="255" B="255" />
                    <PressedFileData Type="Normal" Path="qietu/common/cfxz001.png" Plist="" />
                    <NormalFileData Type="Normal" Path="qietu/common/cfxz001b.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="auto_btn" ActionTag="35598682" IsAutoSize="True" Tag="10" IconVisible="False" TouchEnable="True" FontSize="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="219.0000" Y="76.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="892.0000" Y="596.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.3259" Y="0.3418" />
                    <PreSize X="0.2028" Y="0.1073" />
                    <TextColor A="255" R="255" G="255" B="255" />
                    <PressedFileData Type="Normal" Path="qietu/common/zd001.png" Plist="" />
                    <NormalFileData Type="Normal" Path="qietu/common/zd001b.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="single_cost" ActionTag="700964" IsAutoSize="True" Tag="11" IconVisible="False" FontSize="40" LabelText="单注1000" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="172.0000" Y="52.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="93.0000" Y="671.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.4139" Y="0.4477" />
                    <PreSize X="0.1593" Y="0.0734" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="list" ActionTag="1205655" Tag="51" IconVisible="False" TouchEnable="True" ClipAble="True" BackColorAlpha="100" ColorAngle="270.0000" ScrollDirectionType="Horizontal" HorizontalType="3" ctype="ListViewObjectData">
                    <Size X="1024.0000" Y="348.0000" />
                    <AnchorPoint />
                    <Position X="30.0000" Y="123.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.4722" Y="-0.3263" />
                    <PreSize X="0.9481" Y="0.4915" />
                    <SingleColor A="255" R="150" G="150" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="150" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                    <InnerNodeSize Width="0" Height="0" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="autoCnt_layout" ActionTag="57918113" ZOrder="1" Tag="3535" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="240.0000" Y="50.0000" />
                    <Children>
                      <AbstractNodeData Name="auto_cnt" ActionTag="24146887" IsAutoSize="True" Tag="13" IconVisible="False" FontSize="40" LabelText="跟注50轮" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="166.0000" Y="52.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="30.0000" Y="22.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.1250" Y="0.4400" />
                        <PreSize X="0.6917" Y="1.0400" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="triangle" ActionTag="39124268" IsAutoSize="True" Tag="3534" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="80.0000" Y="80.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="233.0000" Y="23.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.9708" Y="0.4600" />
                        <PreSize X="0.3333" Y="1.6000" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="768.0000" Y="647.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.2111" Y="0.4138" />
                    <PreSize X="0.2222" Y="0.0706" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="auto_layout" ActionTag="23542077" ZOrder="10" Tag="3538" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="124" ComboBoxIndex="1" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="1080.0000" Y="360.0000" />
                    <Children>
                      <AbstractNodeData Name="label" ActionTag="3132265" IsAutoSize="True" Tag="3539" IconVisible="False" FontSize="80" LabelText="跟注50轮 点击取消" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="678.0000" Y="104.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="540.0000" Y="148.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="0" B="4" />
                        <PrePosition X="0.5000" Y="0.4111" />
                        <PreSize X="0.6278" Y="0.2889" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="-2.0000" Y="115.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.5019" Y="-0.3376" />
                    <PreSize X="1.0000" Y="0.5085" />
                    <SingleColor A="255" R="0" G="0" B="0" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="list_layout" ActionTag="48280487" Tag="4402" IconVisible="False" ClipAble="True" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="240.0000" Y="200.0000" />
                    <Children>
                      <AbstractNodeData Name="bg" ActionTag="9897471" Tag="4404" IconVisible="False" Scale9Enable="True" ctype="ImageViewObjectData">
                        <Size X="240.0000" Y="200.0000" />
                        <Children>
                          <AbstractNodeData Name="label1" ActionTag="63497648" Tag="4405" IconVisible="False" IsCustomSize="True" FontSize="40" LabelText="跟注50轮" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="240.0000" Y="56.0000" />
                            <AnchorPoint ScaleY="1.0000" />
                            <Position Y="191.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="227" G="166" B="11" />
                            <PrePosition Y="0.9550" />
                            <PreSize X="1.0000" Y="0.2800" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="label2" ActionTag="63352460" Tag="4406" IconVisible="False" IsCustomSize="True" FontSize="40" LabelText="跟注10轮" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="240.0000" Y="56.0000" />
                            <AnchorPoint ScaleY="1.0000" />
                            <Position X="-1.0000" Y="134.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="227" G="166" B="11" />
                            <PrePosition X="-0.0042" Y="0.6700" />
                            <PreSize X="1.0000" Y="0.2800" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="label3" ActionTag="33301234" Tag="4407" IconVisible="False" IsCustomSize="True" FontSize="40" LabelText="跟注5轮" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="240.0000" Y="56.0000" />
                            <AnchorPoint ScaleY="1.0000" />
                            <Position Y="78.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="227" G="166" B="11" />
                            <PrePosition Y="0.3900" />
                            <PreSize X="1.0000" Y="0.2800" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint />
                        <Position Y="-8.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition Y="-0.0400" />
                        <PreSize X="1.0000" Y="1.0000" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="770.0000" Y="683.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.2130" Y="0.4647" />
                    <PreSize X="0.2222" Y="0.2825" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="alert" ActionTag="57607043" ZOrder="10" Tag="8710" IconVisible="False" Scale9Enable="True" LeftEage="10" RightEage="33" TopEage="70" BottomEage="9" Scale9OriginX="10" Scale9OriginY="9" Scale9Width="50" Scale9Height="1" ctype="ImageViewObjectData">
                    <Size X="500.0000" Y="100.0000" />
                    <Children>
                      <AbstractNodeData Name="image" ActionTag="39769737" IsAutoSize="True" Tag="11895" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="503.0000" Y="52.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="250.0000" Y="60.0000" />
                        <Scale ScaleX="0.9000" ScaleY="0.9000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition Y="0.1000" />
                        <PreSize X="1.0060" Y="0.5200" />
                        <FileData Type="Normal" Path="qietu/text/wenzi_xiazhu.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="540.0000" Y="304.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition Y="-0.0706" />
                    <PreSize X="0.4630" Y="0.1412" />
                    <FileData Type="Normal" Path="qietu/tymb/xinshoukuang.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="panel_jiangjin" ActionTag="32692654" Tag="11885" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="400.0000" Y="50.0000" />
                    <Children>
                      <AbstractNodeData Name="wenzi_1" ActionTag="9866192" IsAutoSize="True" Tag="7900" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="149.0000" Y="45.0000" />
                        <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                        <Position X="149.0000" Y="25.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3725" Y="0.5000" />
                        <PreSize X="0.3725" Y="0.9000" />
                        <FileData Type="Normal" Path="qietu/text/wenzi_1.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="num" ActionTag="7887465" IsAutoSize="True" Tag="11886" IconVisible="False" CharWidth="37" CharHeight="43" LabelText="111111" StartChar="." ctype="TextAtlasObjectData">
                        <Size X="222.0000" Y="43.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="260.0000" Y="25.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.6500" Y="0.5000" />
                        <PreSize X="0.5550" Y="0.8600" />
                        <LabelAtlasFileImage_CNB Type="Normal" Path="num01.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="wenzi_2" ActionTag="33895468" IsAutoSize="True" Tag="8704" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="44.0000" Y="44.0000" />
                        <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                        <Position X="415.0000" Y="25.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="1.0375" Y="0.5000" />
                        <PreSize X="0.1100" Y="0.8800" />
                        <FileData Type="Normal" Path="qietu/text/wenzi_2.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="340.0000" Y="58.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.1852" Y="-0.4181" />
                    <PreSize X="0.3704" Y="0.0706" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="panel_zonger" ActionTag="32928798" Tag="11891" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="400.0000" Y="50.0000" />
                    <Children>
                      <AbstractNodeData Name="wenzi_1" ActionTag="27923727" IsAutoSize="True" Tag="11892" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="194.0000" Y="46.0000" />
                        <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                        <Position X="194.0000" Y="25.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.4850" Y="0.5000" />
                        <PreSize X="0.4850" Y="0.9200" />
                        <FileData Type="Normal" Path="qietu/text/wenzi_3.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="num" ActionTag="49986958" IsAutoSize="True" Tag="11893" IconVisible="False" CharWidth="37" CharHeight="43" LabelText="111111" StartChar="." ctype="TextAtlasObjectData">
                        <Size X="222.0000" Y="43.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="305.0000" Y="25.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7625" Y="0.5000" />
                        <PreSize X="0.5550" Y="0.8600" />
                        <LabelAtlasFileImage_CNB Type="Normal" Path="num01.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="wenzi_2" ActionTag="47229443" IsAutoSize="True" Tag="11894" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="44.0000" Y="44.0000" />
                        <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                        <Position X="460.0000" Y="25.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="1.1500" Y="0.5000" />
                        <PreSize X="0.1100" Y="0.8800" />
                        <FileData Type="Normal" Path="qietu/text/wenzi_2.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="340.0000" Y="8.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.1852" Y="-0.4887" />
                    <PreSize X="0.3704" Y="0.0706" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="542.0000" Y="354.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5019" Y="0.1844" />
                <PreSize X="1.0000" Y="0.3688" />
                <FileData Type="Normal" Path="qietu/fruit/cztBg001.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="layout" ActionTag="65980935" Tag="30" IconVisible="False" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                <Size X="930.0000" Y="930.0000" />
                <Children>
                  <AbstractNodeData Name="history_layout" ActionTag="34755309" Tag="70" IconVisible="False" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="658.0000" Y="102.0000" />
                    <AnchorPoint />
                    <Position X="136.0000" Y="136.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1462" Y="0.1462" />
                    <PreSize X="0.7075" Y="0.1097" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position X="75.0000" Y="821.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.0694" Y="0.4276" />
                <PreSize X="0.8611" Y="0.4844" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="255" G="255" B="255" />
                <EndColor A="255" R="150" G="200" B="255" />
                <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="num_layout" ActionTag="46229433" Tag="32" IconVisible="False" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                <Size X="1000.0000" Y="100.0000" />
                <Children>
                  <AbstractNodeData Name="num_bg1" ActionTag="21843695" IsAutoSize="True" Tag="33" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="394.0000" Y="80.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="228.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.2280" Y="0.5000" />
                    <PreSize X="0.3940" Y="0.8000" />
                    <FileData Type="Normal" Path="qietu/fruit/numBox001.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="num_bg3" ActionTag="17326363" IsAutoSize="True" Tag="35" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="394.0000" Y="80.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="771.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.7710" Y="0.5000" />
                    <PreSize X="0.3940" Y="0.8000" />
                    <FileData Type="Normal" Path="qietu/fruit/numBox001.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="num_bg2" ActionTag="6636610" IsAutoSize="True" Tag="37" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="116.0000" Y="92.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="498.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4980" Y="0.5000" />
                    <PreSize X="0.1160" Y="0.9200" />
                    <FileData Type="Normal" Path="qietu/fruit/numBox002.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="time_atlas" ActionTag="11937100" IsAutoSize="True" Tag="39" IconVisible="False" CharWidth="48" CharHeight="73" LabelText="00" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="96.0000" Y="73.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="498.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4980" Y="0.5000" />
                    <PreSize X="0.0960" Y="0.7300" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="numDa01.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="win_atlas" ActionTag="44979101" IsAutoSize="True" Tag="40" IconVisible="False" CharWidth="37" CharHeight="56" LabelText="10000000000" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="407.0000" Y="56.0000" />
                    <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                    <Position X="422.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4220" Y="0.5000" />
                    <PreSize X="0.4070" Y="0.5600" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="numXiao01.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="total_atlas" ActionTag="65789597" IsAutoSize="True" Tag="42" IconVisible="False" CharWidth="37" CharHeight="56" LabelText="10000000000" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="407.0000" Y="56.0000" />
                    <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                    <Position X="966.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.9660" Y="0.5000" />
                    <PreSize X="0.4070" Y="0.5600" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="numXiao01.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position X="40.0000" Y="716.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.0370" Y="0.3729" />
                <PreSize X="0.9259" Y="0.0521" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="255" G="255" B="255" />
                <EndColor A="255" R="150" G="200" B="255" />
                <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="cd_atlas" ActionTag="47756247" ZOrder="99" IsAutoSize="True" VisibleForFrame="False" Tag="79" IconVisible="False" CharWidth="38" CharHeight="54" LabelText="3" StartChar="." ctype="TextAtlasObjectData">
                <Size X="38.0000" Y="54.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="540.0000" Y="1393.0000" />
                <Scale ScaleX="5.0000" ScaleY="5.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.7255" />
                <PreSize X="0.0352" Y="0.0281" />
                <LabelAtlasFileImage_CNB Type="Normal" Path="num04.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="bet_render" ActionTag="40729877" Tag="43" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                <Size X="128.0000" Y="348.0000" />
                <Children>
                  <AbstractNodeData Name="btn_tmp1" ActionTag="53085673" IsAutoSize="True" Tag="27" IconVisible="False" TouchEnable="True" FontSize="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="128.0000" Y="204.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="64.0000" Y="102.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.2931" />
                    <PreSize X="1.0000" Y="0.5862" />
                    <TextColor A="255" R="255" G="255" B="255" />
                    <PressedFileData Type="Normal" Path="qietu/common/cman001.png" Plist="" />
                    <NormalFileData Type="Normal" Path="qietu/common/cman001b.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="btn_tmp2" ActionTag="16353894" IsAutoSize="True" Tag="29" IconVisible="False" TouchEnable="True" FontSize="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="128.0000" Y="204.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="64.0000" Y="102.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.2931" />
                    <PreSize X="1.0000" Y="0.5862" />
                    <TextColor A="255" R="255" G="255" B="255" />
                    <PressedFileData Type="Normal" Path="qietu/common/cman002.png" Plist="" />
                    <NormalFileData Type="Normal" Path="qietu/common/cman002b.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="img" ActionTag="11318602" IsAutoSize="True" Tag="44" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="80.0000" Y="80.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="64.0000" Y="138.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.3966" />
                    <PreSize X="0.6250" Y="0.2299" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="num_atlas" ActionTag="20083965" IsAutoSize="True" Tag="45" IconVisible="False" CharWidth="35" CharHeight="48" LabelText="10" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="70.0000" Y="48.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="60.0000" Y="64.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4688" Y="0.1839" />
                    <PreSize X="0.5469" Y="0.1379" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="num02.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="my_num" ActionTag="23513491" IsAutoSize="True" Tag="46" IconVisible="False" FontSize="32" LabelText="100万" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="89.0000" Y="41.0000" />
                    <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                    <Position X="114.0000" Y="319.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.8906" Y="0.9167" />
                    <PreSize X="0.6953" Y="0.1178" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="total_num" ActionTag="20356475" IsAutoSize="True" Tag="50" IconVisible="False" FontSize="32" LabelText="100万" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="89.0000" Y="41.0000" />
                    <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                    <Position X="114.0000" Y="260.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.8906" Y="0.7471" />
                    <PreSize X="0.6953" Y="0.1178" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position X="-201.0000" Y="104.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="-0.1861" Y="0.0542" />
                <PreSize X="0.1185" Y="0.1813" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="255" G="255" B="255" />
                <EndColor A="255" R="150" G="200" B="255" />
                <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="slot_render" ActionTag="38874046" IsAutoSize="True" Tag="52" IconVisible="False" ctype="ImageViewObjectData">
                <Size X="128.0000" Y="128.0000" />
                <Children>
                  <AbstractNodeData Name="select_img" ActionTag="50653706" IsAutoSize="True" Tag="53" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="128.0000" Y="128.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="64.0000" Y="64.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="Normal" Path="qietu/fruit/tk001b.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="img" ActionTag="39784582" IsAutoSize="True" Tag="54" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="80.0000" Y="80.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="64.0000" Y="64.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.6250" Y="0.6250" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="num_atlas" ActionTag="8076027" IsAutoSize="True" Tag="55" IconVisible="False" CharWidth="25" CharHeight="32" LabelText="10" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="50.0000" Y="32.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="59.0000" Y="27.0000" />
                    <Scale ScaleX="1.4000" ScaleY="1.4000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.0391" Y="-0.2891" />
                    <PreSize X="0.3906" Y="0.2500" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="num03.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="-137.0000" Y="1199.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="-0.1269" Y="0.6245" />
                <PreSize X="0.1185" Y="0.0667" />
                <FileData Type="Normal" Path="qietu/fruit/tk001.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="history_render" ActionTag="32346491" IsAutoSize="True" Tag="56" IconVisible="False" ctype="ImageViewObjectData">
                <Size X="102.0000" Y="102.0000" />
                <Children>
                  <AbstractNodeData Name="img" ActionTag="44757042" IsAutoSize="True" Tag="57" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="80.0000" Y="80.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="51.0000" Y="51.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.7843" Y="0.7843" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="num_atlas" ActionTag="60885402" IsAutoSize="True" Tag="59" IconVisible="False" CharWidth="25" CharHeight="32" LabelText="10" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="50.0000" Y="32.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="70.0000" Y="20.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1863" Y="-0.3039" />
                    <PreSize X="0.4902" Y="0.3137" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="num03.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="new" ActionTag="23606062" IsAutoSize="True" Tag="3671" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="68.0000" Y="21.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="69.0000" Y="91.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1765" Y="0.3922" />
                    <PreSize X="0.6667" Y="0.2059" />
                    <FileData Type="Normal" Path="qietu/tymb/new.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="-212.0000" Y="1043.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="-0.1963" Y="0.5432" />
                <PreSize X="0.0944" Y="0.0531" />
                <FileData Type="Normal" Path="qietu/fruit/tk002.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="left_light" ActionTag="18260300" IsAutoSize="True" Tag="80" IconVisible="False" ctype="ImageViewObjectData">
                <Size X="36.0000" Y="1016.0000" />
                <Children>
                  <AbstractNodeData Name="layout" ActionTag="45688556" Tag="754" IconVisible="False" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="50.0000" Y="154.0000" />
                    <Children>
                      <AbstractNodeData Name="light1" ActionTag="4861720" IsAutoSize="True" Tag="81" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="26.0000" Y="27.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5200" Y="0.1753" />
                        <PreSize X="1.0000" Y="0.3247" />
                        <FileData Type="Normal" Path="qietu/fruit/lv.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="light2" ActionTag="16761768" IsAutoSize="True" Tag="83" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="26.0000" Y="73.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5200" Y="0.4740" />
                        <PreSize X="1.0000" Y="0.3247" />
                        <FileData Type="Normal" Path="qietu/fruit/hong.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="light3" ActionTag="56783438" IsAutoSize="True" Tag="84" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="26.0000" Y="123.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5200" Y="0.7987" />
                        <PreSize X="1.0000" Y="0.3247" />
                        <FileData Type="Normal" Path="qietu/fruit/huang.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="-8.0000" Y="-6.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.7222" Y="-0.5059" />
                    <PreSize X="1.3889" Y="0.1516" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="28.0000" Y="1234.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.0259" Y="0.6427" />
                <PreSize X="0.0333" Y="0.5292" />
                <FileData Type="Normal" Path="qietu/fruit/changtiao.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="right_light" ActionTag="13493702" IsAutoSize="True" Tag="89" IconVisible="False" ctype="ImageViewObjectData">
                <Size X="36.0000" Y="1016.0000" />
                <Children>
                  <AbstractNodeData Name="layout" ActionTag="31786413" Tag="767" IconVisible="False" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                    <Size X="50.0000" Y="154.0000" />
                    <Children>
                      <AbstractNodeData Name="light1" ActionTag="17642264" IsAutoSize="True" Tag="768" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="26.0000" Y="27.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5200" Y="0.1753" />
                        <PreSize X="1.0000" Y="0.3247" />
                        <FileData Type="Normal" Path="qietu/fruit/lv.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="light2" ActionTag="24562655" IsAutoSize="True" Tag="769" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="26.0000" Y="73.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5200" Y="0.4740" />
                        <PreSize X="1.0000" Y="0.3247" />
                        <FileData Type="Normal" Path="qietu/fruit/hong.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="light3" ActionTag="19737305" IsAutoSize="True" Tag="770" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="26.0000" Y="123.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5200" Y="0.7987" />
                        <PreSize X="1.0000" Y="0.3247" />
                        <FileData Type="Normal" Path="qietu/fruit/huang.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="-8.0000" Y="-6.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.7222" Y="-0.5059" />
                    <PreSize X="1.3889" Y="0.1516" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="255" G="255" B="255" />
                    <EndColor A="255" R="150" G="200" B="255" />
                    <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="1052.0000" Y="1234.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9741" Y="0.6427" />
                <PreSize X="0.0333" Y="0.5292" />
                <FileData Type="Normal" Path="qietu/fruit/changtiao.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="cd_img" ActionTag="12247361" ZOrder="10" IsAutoSize="True" Tag="2132" IconVisible="False" ctype="ImageViewObjectData">
                <Size X="102.0000" Y="200.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="540.0000" Y="1385.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.7214" />
                <PreSize X="0.0944" Y="0.1042" />
                <FileData Type="Normal" Path="qietu/effect/num01.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="result" ActionTag="45136201" ZOrder="10" Tag="2146" IconVisible="False" ClipAble="False" BackColorAlpha="100" ColorAngle="270.0000" ctype="PanelObjectData">
                <Size X="600.0000" Y="600.0000" />
                <Children>
                  <AbstractNodeData Name="star_l" ActionTag="49498576" ZOrder="5" IsAutoSize="True" Tag="2148" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="240.0000" Y="227.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="80.0000" Y="390.0000" />
                    <Scale ScaleX="1.5000" ScaleY="1.5000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1333" Y="0.6500" />
                    <PreSize X="0.4000" Y="0.3783" />
                    <FileData Type="Normal" Path="qietu/effect/fcxx.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_r" ActionTag="47498794" ZOrder="5" IsAutoSize="True" Tag="2150" IconVisible="False" FlipX="True" ctype="ImageViewObjectData">
                    <Size X="240.0000" Y="227.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="520.0000" Y="390.0000" />
                    <Scale ScaleX="1.5000" ScaleY="1.5000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.8667" Y="0.6500" />
                    <PreSize X="0.4000" Y="0.3783" />
                    <FileData Type="Normal" Path="qietu/effect/fcxx.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="pai" ActionTag="13723873" ZOrder="10" IsAutoSize="True" Tag="2151" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="459.0000" Y="163.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="300.0000" Y="200.0000" />
                    <Scale ScaleX="1.5000" ScaleY="1.5000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.3333" />
                    <PreSize X="0.7650" Y="0.2717" />
                    <FileData Type="Normal" Path="qietu/effect/biaopai.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="icon" ActionTag="20006634" ZOrder="8" IsAutoSize="True" Tag="2152" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="80.0000" Y="80.0000" />
                    <AnchorPoint ScaleX="0.5000" />
                    <Position X="300.0000" Y="300.0000" />
                    <Scale ScaleX="2.5000" ScaleY="2.5000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.1333" Y="0.1333" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_1" ActionTag="57693630" ZOrder="20" IsAutoSize="True" Tag="2153" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="64.0000" Y="64.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="-6.0000" Y="28.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.0100" Y="0.0467" />
                    <PreSize X="0.1067" Y="0.1067" />
                    <FileData Type="Normal" Path="qietu/effect/star01.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_2" ActionTag="14779062" ZOrder="20" IsAutoSize="True" Tag="2155" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="95.0000" Y="96.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="747.0000" Y="367.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="1.2450" Y="0.6117" />
                    <PreSize X="0.1583" Y="0.1600" />
                    <FileData Type="Normal" Path="qietu/effect/star02.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_3" ActionTag="60612878" IsAutoSize="True" Tag="2156" RotationSkewX="40.5205" RotationSkewY="40.5205" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="64.0000" Y="64.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="532.0000" Y="-44.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.8867" Y="-0.0733" />
                    <PreSize X="0.1067" Y="0.1067" />
                    <FileData Type="Normal" Path="qietu/effect/star01.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_4" ActionTag="56134214" IsAutoSize="True" Tag="2157" RotationSkewX="-14.3678" RotationSkewY="-14.3678" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="95.0000" Y="96.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="134.0000" Y="606.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.2233" Y="1.0100" />
                    <PreSize X="0.1583" Y="0.1600" />
                    <FileData Type="Normal" Path="qietu/effect/star02.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_5" ActionTag="6465332" IsAutoSize="True" Tag="2159" RotationSkewX="41.5415" RotationSkewY="41.5415" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="95.0000" Y="96.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="-102.0000" Y="-169.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.1700" Y="-0.2817" />
                    <PreSize X="0.1583" Y="0.1600" />
                    <FileData Type="Normal" Path="qietu/effect/star02.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_6" ActionTag="8521534" IsAutoSize="True" Tag="2161" RotationSkewX="147.1241" RotationSkewY="147.1241" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="64.0000" Y="64.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="-131.0000" Y="432.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.2183" Y="0.7200" />
                    <PreSize X="0.1067" Y="0.1067" />
                    <FileData Type="Normal" Path="qietu/effect/star01.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="star_7" ActionTag="30829651" IsAutoSize="True" Tag="2162" RotationSkewX="0.4214" RotationSkewY="0.4214" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="64.0000" Y="64.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="691.0000" Y="755.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="1.1517" Y="1.2583" />
                    <PreSize X="0.1067" Y="0.1067" />
                    <FileData Type="Normal" Path="qietu/effect/star01.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="number" ActionTag="60658720" ZOrder="20" IsAutoSize="True" Tag="2856" IconVisible="False" CharWidth="32" CharHeight="44" LabelText="100" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="96.0000" Y="44.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="245.0000" Y="245.0000" />
                    <Scale ScaleX="2.0000" ScaleY="2.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4083" Y="0.4083" />
                    <PreSize X="0.1600" Y="0.0733" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="qietu/text/vipNum.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="cheng" ActionTag="16723529" ZOrder="20" IsAutoSize="True" Tag="2858" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="63.0000" Y="63.0000" />
                    <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                    <Position X="255.0000" Y="245.0000" />
                    <Scale ScaleX="1.3000" ScaleY="1.3000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4250" Y="0.4083" />
                    <PreSize X="0.1050" Y="0.1050" />
                    <FileData Type="Normal" Path="qietu/text/xh.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position X="240.0000" Y="1000.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.2222" Y="0.5208" />
                <PreSize X="0.5556" Y="0.3125" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="255" G="255" B="255" />
                <EndColor A="255" R="150" G="200" B="255" />
                <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="bigAward" ActionTag="40226508" ZOrder="11" IsAutoSize="True" Tag="5160" IconVisible="False" ctype="ImageViewObjectData">
                <Size X="1080.0000" Y="227.0000" />
                <Children>
                  <AbstractNodeData Name="text_1" ActionTag="25277163" IsAutoSize="True" Tag="5161" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="100.0000" Y="50.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="97.0000" Y="123.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.4102" Y="0.0441" />
                    <PreSize X="0.0926" Y="0.2203" />
                    <FileData Type="Normal" Path="qietu/tymb/text_2.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="head" ActionTag="20503549" Tag="5166" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="137.0000" Y="136.0000" />
                    <Children>
                      <AbstractNodeData Name="top" ActionTag="50553763" IsAutoSize="True" Tag="5167" IconVisible="False" ctype="ImageViewObjectData">
                        <Size X="146.0000" Y="147.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="68.0000" Y="68.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition />
                        <PreSize X="1.0657" Y="1.0809" />
                        <FileData Type="Normal" Path="qietu/main2/txkxiao.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="273.0000" Y="123.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.2472" Y="0.0441" />
                    <PreSize X="0.1269" Y="0.5991" />
                    <FileData Type="Normal" Path="qietu/main2/default.jpg" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="vip" ActionTag="61815913" IsAutoSize="True" Tag="5170" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="89.0000" Y="44.0000" />
                    <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                    <Position X="500.0000" Y="158.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.0370" Y="0.1982" />
                    <PreSize X="0.0824" Y="0.1938" />
                    <FileData Type="Normal" Path="qietu/text/textC01.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="vipNum" ActionTag="846606" IsAutoSize="True" Tag="5169" IconVisible="False" CharWidth="32" CharHeight="44" LabelText="10" StartChar="." ctype="TextAtlasObjectData">
                    <Size X="64.0000" Y="44.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="500.0000" Y="158.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.0370" Y="0.1982" />
                    <PreSize X="0.0593" Y="0.1938" />
                    <LabelAtlasFileImage_CNB Type="Normal" Path="qietu/text/vipNum.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="name" ActionTag="5406347" IsAutoSize="True" Tag="5171" IconVisible="False" FontSize="40" LabelText="玩家名字名字" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="240.0000" Y="52.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="500.0000" Y="93.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="-0.0370" Y="-0.0881" />
                    <PreSize X="0.2222" Y="0.2291" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="text_2" ActionTag="56659768" IsAutoSize="True" Tag="5172" IconVisible="False" ctype="ImageViewObjectData">
                    <Size X="99.0000" Y="49.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="660.0000" Y="128.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1111" Y="0.0661" />
                    <PreSize X="0.0917" Y="0.2159" />
                    <FileData Type="Normal" Path="qietu/tymb/text_1.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="gold" ActionTag="17823647" IsAutoSize="True" Tag="5173" IconVisible="False" FontSize="40" LabelText="1150万金币" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="212.0000" Y="52.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="780.0000" Y="128.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="0" B="0" />
                    <PrePosition X="0.2222" Y="0.0661" />
                    <PreSize X="0.1963" Y="0.2291" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="540.0000" Y="1286.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.6701" />
                <PreSize X="1.0000" Y="0.1182" />
                <FileData Type="Normal" Path="qietu/tymb/kjBar.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="historyAlert_layout" ActionTag="15842600" ZOrder="11" VisibleForFrame="False" Tag="10248" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="168" ComboBoxIndex="1" ColorAngle="270.0000" ctype="PanelObjectData">
                <Size X="1080.0000" Y="1920.0000" />
                <Children>
                  <AbstractNodeData Name="alert" ActionTag="35621374" ZOrder="10" IsAutoSize="True" Tag="10249" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" ctype="ImageViewObjectData">
                    <Size X="1326.0000" Y="461.0000" />
                    <Children>
                      <AbstractNodeData Name="back" ActionTag="66759007" ZOrder="2" IsAutoSize="True" Tag="10250" IconVisible="False" TouchEnable="True" FontSize="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                        <Size X="132.0000" Y="132.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="1128.0000" Y="403.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3507" Y="0.3753" />
                        <PreSize X="0.0995" Y="0.2863" />
                        <TextColor A="255" R="255" G="255" B="255" />
                        <PressedFileData Type="Normal" Path="qietu/tymb/guanbiBt02.png" Plist="" />
                        <NormalFileData Type="Normal" Path="qietu/tymb/guanbiBt01.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="listView" ActionTag="53401243" Tag="10252" IconVisible="False" TouchEnable="True" ClipAble="True" BackColorAlpha="100" ColorAngle="270.0000" ScrollDirectionType="Horizontal" HorizontalType="3" ctype="ListViewObjectData">
                        <Size X="940.0000" Y="50.0000" />
                        <AnchorPoint />
                        <Position X="223.0000" Y="150.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="-0.3318" Y="-0.1735" />
                        <PreSize X="0.7089" Y="0.1085" />
                        <SingleColor A="255" R="150" G="150" B="255" />
                        <FirstColor A="255" R="255" G="255" B="255" />
                        <EndColor A="255" R="150" G="150" B="255" />
                        <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
                        <InnerNodeSize Width="0" Height="0" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="541.0000" Y="1200.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5009" Y="0.6250" />
                    <PreSize X="1.2278" Y="0.2401" />
                    <FileData Type="Normal" Path="qietu/tymb/xiaoxiaoBox.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="255" G="255" B="255" />
                <EndColor A="255" R="150" G="200" B="255" />
                <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="1.0000" Y="1.0000" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="255" G="255" B="255" />
            <EndColor A="255" R="150" G="200" B="255" />
            <ColorVector ScaleX="0.0000" ScaleY="-1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>