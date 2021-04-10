import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    flex-direction:column;
    align-items:flex-start;
    background-color: #269CD9;
    padding:14px;
`;

export const ContainerHead = styled.View`
    margin-top:17%;
    width:100%;
    margin-bottom:5%;
`;
export const CaixaRow = styled.View`
    flex-direction:row;
`;
export const BotaoVolta = styled.TouchableOpacity`
    align-items: center;
    justify-content:center;
    margin-right:15px;
`;
export const ImagemVolta = styled.Image`

`;
export const TituloHead = styled.Text`
    font-weight:bold;
    color: #FFF;
    font-size:30px;
`;
export const ContainerBranco = styled.View`
    background-color:#FFF;
    width:100%;
    border-radius:10px;
    margin-top:10px;
    margin-bottom:5px;
    padding:18px;
    `;
export const TituloInterno = styled.Text`
    font-size:20px;
    font-weight:bold;
    color:#383838;
    margin-bottom:8%;
    `;
export const ContainerPerfil = styled.View`
flex-direction:row;
margin-bottom:15px;
`;
export const FotoPerfil = styled.Image`
height:50px;
width:50px;
border-radius:25px;
`;
export const ContainerInternoPerfil = styled.View`
flex-direction:column;
margin-left:10px;
`;
export const Nome = styled.Text`
font-size:15px;
color:#81879E;
`;
export const BotaoVerPerfil = styled.TouchableOpacity`
margin-top:2px;
`;
export const BotaoVerPerfilTexto = styled.Text`
color:#F4279F;
`;
export const BotaoCaixaBranco = styled.TouchableOpacity`
border:1px solid #AE1B73;
padding:5px;
justify-content:center;
align-items:center;
height:36px;
border-radius:5px;
width:75px;
`;
export const BotaoCaixaBrancoTexto = styled.Text`
font-size:12px;
font-weight:bold;
color:#AE1B73;
`;
export const HardSkillHolding = styled.View`
flex-direction: row;
flexWrap:wrap;
align-items:center;
margin-top:3%;
`;
export const HardSkill = styled.View`
height: 42px;
    justify-content:center;
    align-items:center;
    background-color:#269CD9;
    border-radius:5px;
    margin-right:15px;
    margin-bottom:15px;
`;
export const HardSkillTexto = styled.Text`
padding:10px;
    margin-right:5px;
    margin-left:5px;
    color:white;
    font-weight:bold;
    font-size:16px;

`;
export const ContainerTitulo = styled.View`
flex-direction:row;
justify-content:space-between;
margin-bottom:5%;
`;
export const RodapeTitulo = styled.Text`
margin-top:-10px;
color:#81879E;
`; 
export const ContainerGrupos = styled.View`

`;
export const Grupos = styled.Text`
font-size:20px;
color:#81879E;
margin-top:3%;
margin-bottom:3%;

`;
export const CaixaExtra= styled.View`

`;