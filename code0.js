gdjs.Cena_32Tela_32NomeCode = {};
gdjs.Cena_32Tela_32NomeCode.localVariables = [];
gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1= [];
gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects2= [];
gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1= [];
gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects2= [];
gdjs.Cena_32Tela_32NomeCode.GDMissao1_9595AVObjects1= [];
gdjs.Cena_32Tela_32NomeCode.GDMissao1_9595AVObjects2= [];
gdjs.Cena_32Tela_32NomeCode.GDSoundButtonObjects1= [];
gdjs.Cena_32Tela_32NomeCode.GDSoundButtonObjects2= [];
gdjs.Cena_32Tela_32NomeCode.GDHomeObjects1= [];
gdjs.Cena_32Tela_32NomeCode.GDHomeObjects2= [];


gdjs.Cena_32Tela_32NomeCode.mapOfGDgdjs_9546Cena_959532Tela_959532NomeCode_9546GDVazio1Objects1Objects = Hashtable.newFrom({"Vazio1": gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1});
gdjs.Cena_32Tela_32NomeCode.mapOfGDgdjs_9546Cena_959532Tela_959532NomeCode_9546GDVazio1Objects1Objects = Hashtable.newFrom({"Vazio1": gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1});
gdjs.Cena_32Tela_32NomeCode.mapOfGDgdjs_9546Cena_959532Tela_959532NomeCode_9546GDVazio1Objects1Objects = Hashtable.newFrom({"Vazio1": gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1});
gdjs.Cena_32Tela_32NomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "New Adventure.aac");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vazio1"), gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32Tela_32NomeCode.mapOfGDgdjs_9546Cena_959532Tela_959532NomeCode_9546GDVazio1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena Tela Inicial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vazio1"), gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32Tela_32NomeCode.mapOfGDgdjs_9546Cena_959532Tela_959532NomeCode_9546GDVazio1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NomeJogador"), gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1);
{for(var i = 0, len = gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1.length ;i < len;++i) {
    gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vazio1"), gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32Tela_32NomeCode.mapOfGDgdjs_9546Cena_959532Tela_959532NomeCode_9546GDVazio1Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NomeJogador"), gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1);
{for(var i = 0, len = gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1.length ;i < len;++i) {
    gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Cena_32Tela_32NomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDMissao1_9595AVObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDMissao1_9595AVObjects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDSoundButtonObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDSoundButtonObjects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDHomeObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDHomeObjects2.length = 0;

gdjs.Cena_32Tela_32NomeCode.eventsList0(runtimeScene);
gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDNomeJogadorObjects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDVazio1Objects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDMissao1_9595AVObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDMissao1_9595AVObjects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDSoundButtonObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDSoundButtonObjects2.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDHomeObjects1.length = 0;
gdjs.Cena_32Tela_32NomeCode.GDHomeObjects2.length = 0;


return;

}

gdjs['Cena_32Tela_32NomeCode'] = gdjs.Cena_32Tela_32NomeCode;
