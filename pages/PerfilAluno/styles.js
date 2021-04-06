import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    flex-direction:column;
    align-items:flex-start;
    background-color: #1111;
    padding:12px 12px 12px 12px;
`;

export const ContainerPerfil = styled.View`
    margin-top:50px;
    flex-direction: row;
    `;

export const Foto = styled.Image`
    border-radius:60;
    width:120; 
    height:120;
    
`;

export const InfoPerfil = styled.View`
    margin-left:15px;
    flex-direction: column;
    justify-content:center;
    width:45%;
`;

export const NomePerfil = styled.Text`
    font-weight:bold;
    font-size:22px
`;

export const InfoNomePerfil = styled.Text`
    font-size:13px;
`;

export const ContainerHardSkills = styled.View`
    margin-top: 40px;
`;

export const HardSkillTitulo = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 15px;
`;


export const HardSkillTexto = styled.Text`
margin-bottom: 7px;
`;

export const HardSkill = styled.View`
flex-direction:row;
align-items:center;
margin-bottom: 20px;
`;

export const HardSkillProgress = styled.View`
height:10px;
width:${props=>props.width};
maxWidth:330px;
border-radius: 50px;
background-color: #E53C76;
`;

export const HardSkillProficiencia = styled.Text`
margin-left:7px;
color: #AB1B66;
`;

export const ContainerSoftSkills = styled.View`
margin-top: 40px;
`;

export const SoftSkillTitulo = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const SoftSkillHolding = styled.View`
    flex-direction: row;
    flexWrap:wrap;
    align-items:center;
`;

export const SoftSkill = styled.View`
    height: 42px;
    justify-content:center;
    align-items:center;
    background-color:#269CD9;
    border-radius:5px;
    margin-right:10px;
    margin-bottom:10px;
`;

export const SoftSkillTexto = styled.Text`
    padding:10px;
    color:white;
    font-weight:bold;
`;

export const CapsulaBotao = styled.View`
    width:100%;
    align-items:center;
    justify-content:center;
`;

export const Botao = styled.TouchableOpacity`
margin-top:40px;
background-color:#A51966;
width:170px;
height:70px;
align-items:center;
justify-content:center;
border-radius:15px;
`;

export const BotaoTexto = styled.Text`
padding:15px;
color:#FFF;
`;