import React from 'react';
import {ScrollView} from 'react-native';

import img from '../../assets/left_icon.png'
import imgg from '../../assets/foto_perfil.jpg'

import {  
    Container,
    ContainerHead,
    CaixaRow,
    BotaoVolta,
    ImagemVolta,
    TituloHead,
    ContainerBranco,
    TituloInterno,
    ContainerPerfil,
    FotoPerfil,
    ContainerInternoPerfil,
    Nome,
    BotaoVerPerfil,
    BotaoVerPerfilTexto,
    BotaoCaixaBranco,
    BotaoCaixaBrancoTexto,
    HardSkillHolding,
    HardSkill,
    HardSkillTexto,
    ContainerTitulo,
    CaixaExtra,
    ContainerInternoTitulo,
    RodapeTitulo,
    ContainerGrupos,
    Grupos,
} from './styles'

export default function DetalheDisciplina() {
    
    return (
    <ScrollView>
        <Container>
          <ContainerHead>
              <CaixaRow>
                  <BotaoVolta>
                      <ImagemVolta source={img}/>
                  </BotaoVolta>
                  <TituloHead>
                      Gestão de Design
                  </TituloHead>
              </CaixaRow>
          </ContainerHead>
          <ContainerBranco>
            <TituloInterno>Alunos cadastrados</TituloInterno>
            <ContainerPerfil>
                <FotoPerfil source={imgg}/>
                <ContainerInternoPerfil>
                    <Nome>Bernardo Cavalcante</Nome>
                    <BotaoVerPerfil>
                        <BotaoVerPerfilTexto>
                            Ver perfil
                        </BotaoVerPerfilTexto>
                    </BotaoVerPerfil>
                </ContainerInternoPerfil>
            </ContainerPerfil>
            <ContainerPerfil>
                <FotoPerfil source={imgg}/>
                <ContainerInternoPerfil>
                    <Nome>Juliana Almeida</Nome>
                    <BotaoVerPerfil>
                        <BotaoVerPerfilTexto>
                            Ver perfil
                        </BotaoVerPerfilTexto>
                    </BotaoVerPerfil>
                </ContainerInternoPerfil>
            </ContainerPerfil>
            <ContainerPerfil>
                <FotoPerfil source={imgg}/>
                <ContainerInternoPerfil>
                    <Nome>Fernando Leme</Nome>
                    <BotaoVerPerfil>
                        <BotaoVerPerfilTexto>
                            Ver perfil
                        </BotaoVerPerfilTexto>
                    </BotaoVerPerfil>
                </ContainerInternoPerfil>
            </ContainerPerfil>
          </ContainerBranco>
          <ContainerBranco>
            <ContainerTitulo>
              <TituloInterno>Hard skills</TituloInterno>
              <BotaoCaixaBranco>
                  <BotaoCaixaBrancoTexto>Editar</BotaoCaixaBrancoTexto>
              </BotaoCaixaBranco>
            </ContainerTitulo>  
              <HardSkillHolding>
                  <HardSkill>
                      <HardSkillTexto>C#</HardSkillTexto>
                  </HardSkill>
                  <HardSkill>
                      <HardSkillTexto>Ilustração</HardSkillTexto>
                  </HardSkill>
                  <HardSkill>
                      <HardSkillTexto>Vetorização</HardSkillTexto>
                  </HardSkill>
                  <HardSkill>
                      <HardSkillTexto>Manipulação de imagens</HardSkillTexto>
                  </HardSkill>
                  <HardSkill>
                      <HardSkillTexto>C++</HardSkillTexto>
                  </HardSkill>
                  <HardSkill>
                      <HardSkillTexto>HTML</HardSkillTexto>
                  </HardSkill>
                  <HardSkill>
                      <HardSkillTexto>Prototipagem</HardSkillTexto>
                  </HardSkill>
              </HardSkillHolding>
          </ContainerBranco>
          <ContainerBranco>
              <ContainerTitulo>
                    <CaixaExtra>
                        <TituloInterno>AV1 - Ativa</TituloInterno>
                        <RodapeTitulo>Vale 7 pontos</RodapeTitulo>
                    </CaixaExtra>
                        <BotaoCaixaBranco>
                            <BotaoCaixaBrancoTexto>Ver mais</BotaoCaixaBrancoTexto>
                        </BotaoCaixaBranco>
                </ContainerTitulo>
                <ContainerGrupos>
                    <Grupos>7 grupos formados</Grupos>
                </ContainerGrupos>
            </ContainerBranco>

          <ContainerBranco>
              <ContainerTitulo>
                    <CaixaExtra>
                        <TituloInterno>APS - Ativa</TituloInterno>
                        <RodapeTitulo>Vale 3 pontos</RodapeTitulo>
                    </CaixaExtra>
                        <BotaoCaixaBranco>
                            <BotaoCaixaBrancoTexto>Ver mais</BotaoCaixaBrancoTexto>
                        </BotaoCaixaBranco>
                </ContainerTitulo>
                <ContainerGrupos>
                    <Grupos>6 grupos formados</Grupos>
                </ContainerGrupos>
            </ContainerBranco>
      </Container>
    </ScrollView>
    );
}

