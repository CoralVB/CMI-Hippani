function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("Pista",true);

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function Sonido_OnClick(){
StackTrace="Sonido.On Click";
SoundPlay("ding",false);


}

function Pausa_OnClick(){
StackTrace="Pausa.On Click";
SoundPlay("ding",false);

}

function Ir_OnClick(){
StackTrace="Ir.On Click";
SoundPlay("ding",false);
GotoSceneNameAndPlay("Scene2",0);

}

function Musica_OnClick(){
StackTrace="Musica.On Click";
SoundPause("Pista 2");

}

function Volver_OnClick(){
StackTrace="Volver.On Click";
GotoSceneName("Scene1");

}

