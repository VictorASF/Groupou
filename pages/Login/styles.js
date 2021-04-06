import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    background-color: #AB1B71;
    padding:12px 12px 0px 12px;
`;

export const CaixaLogin = styled.View`
    background-color:#fff;
    width:100%;
    height:52%;
    border-top-right-radius:25px;
    border-top-left-radius:25px;
    padding:20px;
`;

export const ContainerBotoes = styled.View`
    flex-direction:row;
`;

export const Botao = styled.TouchableOpacity`
    flex:1;
    align-items:center;
    justify-content:center;
    height:60px;
    border-bottom-width:4px;
    border-bottom-color: ${props=> props.ultimoClick ? "#AE1B73":"#fff"};
    margin: 0px 5px;
`;

export const BotaoTexto = styled.Text`
    font-size:20px;
    color:${props=> props.ultimoClick ? "#673f66":"#ccc"};
`;

export const ContainerInputs = styled.View`
    margin-top:10px;
    margin-bottom:30px;
`;

export const InputTexto = styled.Text`
    font-size:16px;
    color:#b4b8c6;
`;

export const Input = styled.TextInput`
    border:1px solid #ccc;
    height:65px;
    border-radius: 5px;
    padding:0px 20px;
    margin-top:10px;
`;

export const EsqueciSenha = styled.TouchableOpacity`
    align-items:flex-end;
`;


export const EsqueciSenhaTexto = styled.Text`
    color:#ae1b73;
`;

export const ContainerBotoesLogin = styled.View`
    flex-direction:row;
    margin-top:20px;
    ${BotaoLogin}:nth-child(1){
        margin-right:10px;
    }
`;

export const BotaoLogin = styled.TouchableOpacity`
    flex:1;
    height:60px;
    border:1px solid #ae1b73;
    border-radius:10px;
    justify-content: center;
    align-items:center;
    background-color:${props => props.inverter ? "#AE1B73" : "#fff"};
    margin-right: ${props=> props.inverter ? "0px" : "10px"};
    
`;

export const BotaoLoginTexto = styled.Text`
    color:${props => props.inverter ? "#fff" : "#AE1B73"};
    font-weight:bold;
`;

export const Logo = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const Image = styled.Image`
    width:300, height:100
`;

export const ContainerTexto = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const TextoChamada=styled.Text`
    color:#fff;
    font-size:20px;
    text-align:center;
`;

export const BackgroundImage = styled.Image`
    position:absolute;
    width:230%;
    height:120%;
`;