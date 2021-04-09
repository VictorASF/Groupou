import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    flex-direction:column;
    align-items:flex-start;
    
    background-color: #FFF;
    padding:12px 12px 0px 12px;
`;

export const ContainerHead = styled.View`
align-items:center;
width:100%;
margin-top:20%;
`;

export const FotoPerfil = styled.Image`
height:120px;
width:120px;
border-radius:60px;
margin-bottom:25px;

`;

export const CarregarNovaFoto = styled.TouchableOpacity`
border:1px solid #AB1B71
border-radius:5px;
`;
export const CarregarNovaFotoTexto = styled.Text`
padding:8px;
margin-right:10px;
margin-left:10px;
font-weight:bold;
color:#AB1B71;
font-size:12px;
`;
export const ContainerBody = styled.View`
margin-top:50px;
width:100%;
`;
export const Nome = styled.Text`
font-size:18px;
color:#81879E;
`;

export const Email = styled.Text`
font-size:18px;
color:#81879E;
`;

export const NovaSenha = styled.Text`
font-size:18px;
color:#81879E;
`;

export const ConfirmarSenha = styled.Text`
font-size:18px;
color:#81879E;
`;

export const CaixaInput = styled.TextInput`
width:100%;
border:1px solid #81879E;
height: 50px;
border-radius:5px;
margin-top:5px;
margin-bottom:15px;
padding:12px;
color:#81879E;
font-size:16px;
`;

export const ContainerFoot = styled.View`
width:100%;
margin-top:18%;
`;

export const CaixaBotoes = styled.View`
flex-direction:row;

flex:1
`;

export const Botao = styled.TouchableOpacity`
flex:1;
height:70px;
border:1px solid #ae1b73;
border-radius:10px;
justify-content: center;
align-items:center;
background-color:${props => props.inverter ? "#AE1B73" : "#fff"};
margin-right: ${props=> props.inverter ? "0px" : "10px"};

`;

export const BotaoTexto = styled.Text`
color:${props => props.inverter ? "#fff" : "#AE1B73"};
font-weight:bold;
font-size:16px;
`;

