import React, { useState }from 'react';

import img from '../../assets/foto_perfil.jpg'

import {  
    Container,
    ContainerHead,
    FotoPerfil,
    CarregarNovaFoto,
    CarregarNovaFotoTexto,
    ContainerBody,
    Nome,
    CaixaInput,
    Email,
    NovaSenha,
    ConfirmarSenha,
    ContainerFoot,
    CaixaBotoes,
    Botao,
    BotaoTexto,
} from './styles'

export default function EditarPerfil() {
    
    const[ name, onChangeName ] = React.useState("Victor Fonseca")
    const[ email, onChangeEmail ] = React.useState("vasf111@hotmail.com")
    const[ password, onChangePassword ] = React.useState("11111111")
    const[ confirmation, onChangeConfirmation ] = React.useState("11111111")

    return (
      <Container>
          <ContainerHead>
              <FotoPerfil source={img}/>
              <CarregarNovaFoto>
                  <CarregarNovaFotoTexto>
                      Carregar nova foto
                  </CarregarNovaFotoTexto>
              </CarregarNovaFoto>
          </ContainerHead>
          <ContainerBody>
              <Nome>Nome Completo</Nome>
              <CaixaInput onChangeText={onChangeName} value={name}></CaixaInput>
              <Email>E-mail</Email>
              <CaixaInput 
              onChangeText={onChangeEmail}
              value={email} 
              keyboardType="email-address"
              textContentType="emailAddress"
              ></CaixaInput>
              <NovaSenha>Nova senha</NovaSenha>
              <CaixaInput
                onChangeText={onChangePassword}
                value={password} 
                textContentType="password"
                secureTextEntry={true} ></CaixaInput>
              <ConfirmarSenha>Confirmar senha</ConfirmarSenha>
              <CaixaInput
                onChangeText={onChangeConfirmation}
                value={confirmation} 
                textContentType="password"
                secureTextEntry={true}></CaixaInput>
          </ContainerBody>
          <ContainerFoot>
              <CaixaBotoes>
                <Botao inverter={false}>
                    <BotaoTexto inverter={false}>Cancelar</BotaoTexto>
                </Botao>
                <Botao inverter={true}>
                    <BotaoTexto inverter={true}>Salvar</BotaoTexto>
                </Botao>
              </CaixaBotoes>
          </ContainerFoot>
      </Container>
    );
}

