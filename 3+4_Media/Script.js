function Movie_OnStart(){
StackTrace="On Start";
VideoPlay("Video_1");
SoundPlay("pista",true);

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();


}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function Ir_OnClick(){
StackTrace="Ir.On Click";
SoundPlay("ding",false);
GotoSceneNameAndPlay("Scene2",0);

}

function Pause_OnClick(){
StackTrace="Pause.On Click";
SoundPlay("ding",false);
VideoPause("Video_1");
}

function Pause_OnRelease(){
StackTrace="Pause.On Release";
VideoResume("Video_1");
}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.On Click";
SoundPlay("ding",false);
VideoSetVolume("Video_1",0);
}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.On Release";
VideoSetVolume("Video_1",100);
}

function Volver_OnClick(){
StackTrace="Volver.On Click";
SoundPlay("ding",false);
GotoSceneName("Scene1");

}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.On Click";
SoundPlay("ding",false);
SoundPause("pista");
}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.On Release";
SoundResume("pista");
}

