import React, { useState } from 'react';
import {ScrollView} from 'react-native';
import img from '../../assets/foto_perfil.jpg'
import {
    Container,
    ContainerPerfil,
    Foto,
    InfoPerfil,
    NomePerfil,
    InfoNomePerfil,
    ContainerHardSkills,
    HardSkillTitulo,
    HardSkillTexto,
    HardSkillProgress,
    HardSkillProficiencia,
    HardSkill,
    ContainerSoftSkills,
    SoftSkill,
    SoftSkillTexto,
    SoftSkillTitulo,
    SoftSkillHolding,
    Botao,
    BotaoTexto,
    CapsulaBotao
} from './styles'

export default function PerfilAluno(){
    return(
    <ScrollView>
        <Container>
            <ContainerPerfil>
                <Foto source = {img}/>
                <InfoPerfil>
                    <NomePerfil>
                        Victor Fonseca
                    </NomePerfil> 
                    <InfoNomePerfil>
                        Está no seu grupo de Gestão de Design
                    </InfoNomePerfil>                   
                </InfoPerfil>
            </ContainerPerfil>

            <ContainerHardSkills>
                <HardSkillTitulo>
                    Hard Skills
                </HardSkillTitulo>
                
                    <HardSkillTexto>
                        HTML
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="303.6px" />
                        <HardSkillProficiencia  >
                            9.2
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        Prototipação
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="290.4px"/>
                        <HardSkillProficiencia >
                            8.8
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        Java
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="217.8px"/>
                        <HardSkillProficiencia >
                            6.6
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        NodeJS
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="247.5px"/>
                        <HardSkillProficiencia >
                            7.5
                        </HardSkillProficiencia>
                    </HardSkill>
            </ContainerHardSkills>
            <ContainerSoftSkills>
                <SoftSkillTitulo>
                    SoftSkills
                </SoftSkillTitulo>
                <SoftSkillHolding>
                    <SoftSkill>
                        <SoftSkillTexto>
                            Comunicação
                        </SoftSkillTexto>
                    </SoftSkill>

                    <SoftSkill>
                        <SoftSkillTexto>
                            Gestão de Crises
                        </SoftSkillTexto>
                    </SoftSkill>

                    <SoftSkill>
                        <SoftSkillTexto>
                            Organização 
                        </SoftSkillTexto>
                    </SoftSkill>

                    <SoftSkill>
                        <SoftSkillTexto>
                            Liderança  
                        </SoftSkillTexto>
                    </SoftSkill>

                    <SoftSkill>
                        <SoftSkillTexto>
                            Autodidata
                        </SoftSkillTexto>
                    </SoftSkill>
                </SoftSkillHolding>    
            </ContainerSoftSkills>
            <CapsulaBotao>
                <Botao>
                    <BotaoTexto>
                        Fechar
                    </BotaoTexto>
                </Botao>
            </CapsulaBotao>
        </Container>
    </ScrollView>
    );
}