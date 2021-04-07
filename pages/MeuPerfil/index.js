import React, { useState } from 'react';
import {ScrollView} from 'react-native';
import img from '../../assets/foto_perfil.jpg'
import imgCont from '../../assets/rosto_contente.png'
import {
    Container,
    ContainerTexto,
    ContainerDadosPessoais,
    DadosHeader,
    DadosTexto,
    DadosEditar,
    DadosEditarTexto,
    DadosBody,
    FotoPerfil,
    DadosNome,
    DadosEmail,
    DadosSair,
    DadosSairTexto,
    ContainerSoftSkills,
    SoftSkillTitulo,
    SoftSkillHolding,
    SoftSkill,
    SoftSkillTexto,
    ContainerHardSkills,
    HardSkillTitulo,
    HardSkillTexto,
    HardSkill,
    HardSkillProgress,
    HardSkillProficiencia,
    ContainerAvaliacao,
    AvaliacaoHolding,
    AvaliacaoEscritaMedia,
    AvaliacaoTitulo,
    AvaliacaoFoto,
    AvaliacaoTexto,
    AvaliacaoMedia,
    AvaliacaoColumn
} from './styles'

export default function MeuPerfil(){
    return(
        <ScrollView>

            <Container>
                <ContainerTexto>
                    Meu Perfil
                </ContainerTexto>
                <ContainerDadosPessoais>
                    <DadosHeader>
                        <DadosTexto>Dados Pessoais</DadosTexto>
                        <DadosEditar>
                            <DadosEditarTexto>Editar</DadosEditarTexto>
                        </DadosEditar>
                    </DadosHeader>
                    <DadosBody>
                        <FotoPerfil source={img}/>
                        <DadosNome>Victor Fonseca</DadosNome>
                        <DadosEmail>vasf111@hotmail.com</DadosEmail>
                        <DadosSair>
                            <DadosSairTexto>Sair</DadosSairTexto>
                        </DadosSair>
                    </DadosBody>
                </ContainerDadosPessoais>

                <ContainerSoftSkills>
                    <SoftSkillTitulo>
                        Minhas Soft Skills
                    </SoftSkillTitulo>
                    <SoftSkillHolding>
                        <SoftSkill>
                            <SoftSkillTexto>
                                Liderança
                            </SoftSkillTexto>
                        </SoftSkill>

                        <SoftSkill>
                            <SoftSkillTexto>
                                Empatia
                            </SoftSkillTexto>
                        </SoftSkill>

                        <SoftSkill>
                            <SoftSkillTexto>
                                Comunicação
                            </SoftSkillTexto>
                        </SoftSkill>

                        <SoftSkill>
                            <SoftSkillTexto>
                                Comunicação
                            </SoftSkillTexto>
                        </SoftSkill>
                    </SoftSkillHolding>
                </ContainerSoftSkills>

                <ContainerHardSkills>
                <HardSkillTitulo>
                    Hard Skills
                </HardSkillTitulo>
                
                    <HardSkillTexto>
                        HTML
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="276px" />
                        <HardSkillProficiencia  >
                            9.2
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        Prototipação
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="264px"/>
                        <HardSkillProficiencia >
                            8.8
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        Java
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="198px"/>
                        <HardSkillProficiencia >
                            6.6
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        NodeJS
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="225px"/>
                        <HardSkillProficiencia >
                            7.5
                        </HardSkillProficiencia>
                    </HardSkill>
                    <HardSkillTexto>
                        HTML
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="276px" />
                        <HardSkillProficiencia  >
                            9.2
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        Prototipação
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="264px"/>
                        <HardSkillProficiencia >
                            8.8
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        Java
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="198px"/>
                        <HardSkillProficiencia >
                            6.6
                        </HardSkillProficiencia>
                    </HardSkill>

                    <HardSkillTexto>
                        NodeJS
                    </HardSkillTexto>
                    <HardSkill>
                        <HardSkillProgress width="225px"/>
                        <HardSkillProficiencia >
                            7.5
                        </HardSkillProficiencia>
                    </HardSkill>
            </ContainerHardSkills>

            <ContainerAvaliacao>
                <AvaliacaoTitulo>
                    Avaliações Recebidas
                </AvaliacaoTitulo>
                <AvaliacaoHolding>
                    <AvaliacaoFoto source={imgCont}/>
                    <AvaliacaoColumn>
                        <AvaliacaoEscritaMedia>Sua média</AvaliacaoEscritaMedia>
                        <AvaliacaoMedia>3,9</AvaliacaoMedia>
                    </AvaliacaoColumn>
                </AvaliacaoHolding>
                <AvaliacaoTexto>Seus colegas te avaliam com as seguintes soft skills:
                </AvaliacaoTexto>
                <SoftSkillHolding>
                    <SoftSkill>
                        <SoftSkillTexto>
                            Liderança
                        </SoftSkillTexto>
                    </SoftSkill>

                    <SoftSkill>
                        <SoftSkillTexto>
                            Empatia
                        </SoftSkillTexto>
                    </SoftSkill>

                    <SoftSkill>
                        <SoftSkillTexto>
                            Comunicação
                        </SoftSkillTexto>
                    </SoftSkill>

                    <SoftSkill>
                        <SoftSkillTexto>
                            Comunicação
                        </SoftSkillTexto>
                    </SoftSkill>
                </SoftSkillHolding>
            </ContainerAvaliacao>

            </Container>

        </ScrollView>
    );
}