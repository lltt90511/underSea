<GameFile>
  <PropertyGroup Name="startLoading" Type="Layer" ID="0fc52ff3-4fe2-4c1c-9c52-091c9dbe18b0" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Layer" Tag="115" ctype="GameLayerObjectData">
        <Size X="1080.0000" Y="1920.0000" />
        <Children>
          <AbstractNodeData Name="LoadingBg" ActionTag="1520328200" Tag="118" IconVisible="False" LeftMargin="233.0000" RightMargin="233.0000" TopMargin="1813.0000" BottomMargin="53.0000" ctype="SpriteObjectData">
            <Size X="614.0000" Y="54.0000" />
            <Children>
              <AbstractNodeData Name="LoadingBar" ActionTag="-235686382" Tag="116" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="28.5000" RightMargin="28.5000" TopMargin="12.5000" BottomMargin="12.5000" ProgressInfo="0" ctype="LoadingBarObjectData">
                <Size X="557.0000" Y="29.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="307.0000" Y="27.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.9072" Y="0.5370" />
                <ImageFileData Type="Normal" Path="qietu/start/loadingBar02.png" Plist="" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="540.0000" Y="80.0000" />
            <Scale ScaleX="1.6800" ScaleY="1.6800" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.0417" />
            <PreSize X="0.5685" Y="0.0281" />
            <FileData Type="Normal" Path="qietu/start/loadingBar01.png" Plist="" />
            <BlendFunc Src="770" Dst="1" />
          </AbstractNodeData>
          <AbstractNodeData Name="title" ActionTag="-1950947237" Tag="119" IconVisible="False" LeftMargin="50.0000" RightMargin="830.0000" TopMargin="1740.0000" BottomMargin="140.0000" FontSize="40" LabelText="Loading..." ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="200.0000" Y="40.0000" />
            <AnchorPoint ScaleY="0.5000" />
            <Position X="50.0000" Y="160.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0463" Y="0.0833" />
            <PreSize X="0.1852" Y="0.0208" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="num" ActionTag="836265481" Tag="120" IconVisible="False" LeftMargin="930.0000" RightMargin="50.0000" TopMargin="1740.0000" BottomMargin="140.0000" IsCustomSize="True" FontSize="40" LabelText="0%" HorizontalAlignmentType="HT_Right" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="100.0000" Y="40.0000" />
            <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
            <Position X="1030.0000" Y="160.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.9537" Y="0.0833" />
            <PreSize X="0.0926" Y="0.0208" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="tip" ActionTag="-2063416492" Tag="121" IconVisible="False" LeftMargin="362.4011" RightMargin="377.5989" TopMargin="1599.9993" BottomMargin="280.0008" FontSize="40" LabelText="aaaaaaaaaaaaaaaaa" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="340.0000" Y="40.0000" />
            <AnchorPoint ScaleX="0.4885" ScaleY="0.5118" />
            <Position X="528.4911" Y="300.4728" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.4893" Y="0.1565" />
            <PreSize X="0.3148" Y="0.0208" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="armature" ActionTag="621124237" Tag="7" IconVisible="True" LeftMargin="540.0000" RightMargin="540.0000" TopMargin="960.0000" BottomMargin="960.0000" IsLoop="True" IsAutoPlay="True" CurrentAnimationName="Animation1" ctype="ArmatureNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <AnchorPoint />
            <Position X="540.0000" Y="960.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="Normal" Path="ani/loadingmini2.ExportJson" Plist="" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>