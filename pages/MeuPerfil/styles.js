import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    flex-direction:column;
    align-items:flex-start;
    background-color: #269CD9;
    padding:14px;
`;

export const ContainerTexto = styled.Text`
    margin-top: 25px;
    padding:20px;
    font-size:30px;
    color:#FDFDFD;
    font-weight:bold;
    margin-bottom: 8px;
`;

export const ContainerDadosPessoais = styled.View` 
    background-color:#FFFFFF;
    border-radius:10px;
    padding:20px;
    width:100%;
    margin-bottom:15px;
`;

export const DadosHeader = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

export const DadosTexto = styled.Text`
    font-weight:bold;
    color:#5F6478;
    font-size:20px;
`;

export const DadosEditar = styled.TouchableOpacity`
    border:1px solid #AE1B73;
    padding:6px 15px 6px 15px;
    border-radius:5px;

`;

export const DadosEditarTexto = styled.Text`
    font-size:14px;
    color:#AE1B73;
`;

export const DadosBody = styled.View`
    align-items:center;
`;

export const FotoPerfil = styled.Image`
    border-radius:60;
    width:120; 
    height:120;
    margin-top:20px;
    margin-bottom:20px;
    `;

export const DadosNome = styled.Text`
    margin-bottom:10px;
    font-size:18px;
    color: #81879E;
    font-weight:bold;
`;

export const DadosEmail = styled.Text`
    margin-bottom:10px;
    font-size:15px;
    color: #81879E;
`;

export const DadosSair = styled.TouchableOpacity`
    margin-top:5px;
    margin-bottom:5px;
`;

export const DadosSairTexto = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:#AE1B73;
    padding:10px;
`;

export const ContainerSoftSkills = styled.View`
background-color:#FFFFFF;
border-radius:10px;
padding:20px;
width:100%;
margin-bottom:15px;
`;

export const SoftSkillTitulo = styled.Text`
    font-weight:bold;
    color:#5F6478;
    font-size:20px;
    margin-bottom:20px;
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
    margin-bottom:15px;
`;

export const SoftSkillTexto = styled.Text`
    padding:10px;
    margin-right:5px;
    margin-left:5px;
    color:white;
    font-weight:bold;
`;

export const ContainerHardSkills = styled.View`
    background-color:#FFFFFF;
border-radius:10px;
padding:20px;
width:100%;
margin-bottom:15px;
`;

export const HardSkillTitulo = styled.Text`
    font-weight:bold;
    color:#5F6478;
    font-size:20px;
    margin-bottom:20px;

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
maxWidth:300px;
border-radius: 50px;
background-color: #E53C76;
`;

export const HardSkillProficiencia = styled.Text`
margin-left:7px;
color: #AB1B66;
`;

export const ContainerAvaliacao = styled.View`
background-color:#FFFFFF;
border-radius:10px;
padding:20px;
width:100%;
margin-bottom:15px;
`;

export const AvaliacaoHolding = styled.View`
flex-direction:row;
margin-bottom: 20px;
`;

export const AvaliacaoEscritaMedia = styled.Text`
margin-bottom:5px;
    font-size:18px;
    color: #81879E;
    font-weight:bold;
`;

export const AvaliacaoTitulo = styled.Text`
font-weight:bold;
    color:#5F6478;
    font-size:20px;
    margin-bottom:20px;
`;

export const AvaliacaoFoto = styled.Image`
resizeMode: contain;
height:90px;
width:90px;
`;

export const AvaliacaoColumn = styled.View`
margin-left:10px;
margin-top:10px;
`;

export const AvaliacaoTexto = styled.Text`
margin-bottom:10px;
    font-size:18px;
    color: #81879E;

`;

export const AvaliacaoMedia= styled.Text`
font-size:35px;
font-weight:bold;
color:#00BF00;
`;