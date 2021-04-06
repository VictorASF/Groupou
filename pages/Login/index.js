import React, { useState } from 'react';
import {Text, View} from 'react-native';
import logoImg from '../../assets/logo.png';
import img from "../../assets/login_backgroud.png";

import {  
Container,
CaixaLogin,
ContainerBotoes,
Botao,
BotaoTexto,
InputTexto,
Input,
ContainerInputs,
EsqueciSenha,
EsqueciSenhaTexto,
ContainerBotoesLogin,
BotaoLogin,
BotaoLoginTexto,
Logo,
Image,
ContainerTexto,
TextoChamada,
BackgroundImage
} from './styles'

export default function Login() {

    const [botaoAtual, setBotaoAtual] = useState('aluno')

  return (
      <Container>
        <BackgroundImage source={img} />
        <Logo>
            <Image source={logoImg}
                style={{
                    width:300, height:100
                }}
            />
        </Logo>

        <ContainerTexto>

            <TextoChamada>
                Problemas para formar                
            </TextoChamada>
            <TextoChamada>
                grupos de trabalho?
            </TextoChamada>
            <TextoChamada>
                o Grupou resolve!                
            </TextoChamada>


        </ContainerTexto>

          <CaixaLogin>
            <ContainerBotoes>
                <Botao ultimoClick={
                    botaoAtual === 'aluno' ? true : false
                }
                onPress={()=>{setBotaoAtual('aluno')}}>
                    <BotaoTexto ultimoClick={
                    botaoAtual === 'aluno' ? true : false
                }>
                        Aluno
                    </BotaoTexto>
                </Botao>
                <Botao ultimoClick={
                    botaoAtual === 'professor' ? true : false
                }
                onPress={()=>{setBotaoAtual('professor')}}>
                    <BotaoTexto ultimoClick={
                    botaoAtual === 'professor' ? true : false
                }>
                        Professor
                    </BotaoTexto>
                </Botao>
            </ContainerBotoes>
                <ContainerInputs>
                    <InputTexto>
                    Email    
                    </InputTexto>
                    <Input/>

                    <InputTexto>
                    Senha 
                    </InputTexto>
                    <Input/>
                </ContainerInputs>
                <EsqueciSenha>


                    <EsqueciSenhaTexto>
                        Esqueci minha senha
                    </EsqueciSenhaTexto>
                </EsqueciSenha>
                
                <ContainerBotoesLogin>
                    <BotaoLogin 
                        inverter={false}
                    >
                        <BotaoLoginTexto
                            inverter={false}
                        >
                            Cadastre-se
                        </BotaoLoginTexto>
                    </BotaoLogin>

                    <BotaoLogin
                        inverter={true}
                    >
                        <BotaoLoginTexto 
                            inverter={true}
                        >
                            Entrar
                        </BotaoLoginTexto>
                    </BotaoLogin>

                </ContainerBotoesLogin>

          </CaixaLogin>
      </Container>
    );
}

