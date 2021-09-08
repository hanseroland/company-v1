import React from 'react'
import {Box, Container, Divider, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import InfoSection from '../components/infoSection';
import { CompetencesData, InfoData } from '../data/InfoData';
import SectionTitre from '../components/titre/SectionTitre';
import FormSection from '../components/FormSection';
import Temoignages from '../components/temoignages/Temoignages';
import EquipeSection from '../components/equipe/EquipeSection';
import Paragraphe from '../components/services/Paragraphe';
import SkillsCard from '../components/carteActu/SkillsCard';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 200,
      paddingTop: '56.25%', // 16:9
     objectFit:'cover'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    productTile:{
  
        color: 'blue',
        textDecoration:'none',
  
       '&:hover':{
           color: '#ff6600'
       }
  
    }
  }));


const ContactDetail = 
{
   
    id:'contact',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contactez-nous',
    headLine: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description1: "Téléphone : Tél.: (221) 77 111 00 00",
    description2: "Email : contact@company.com",
    description3: "Fax: (221) 77 000 00 00 / 01",
    description4: "Adresse : B.P. 0000 – Ville (Rue : CITE SNI)",
    imgStart: false,
    dark: true,
    primary: true,
    darkText: false,
};

const InfoEntreprise = {
  contenu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'+
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'+ 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

} 

const Apropos =  () => {

    const classes = useStyles();


    return (
        <>
           
             <Box
                p={2} 
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                    }}
              >
               <Container  maxWidth={false}>
                        <Grid container spacing={2}>
                           
                                    <Box mt={10} >
                                        <SectionTitre heading="Qui sommes-nous ?"/>
                                        <Paragraphe contenu={InfoEntreprise.contenu} />
                                        {/*<InfoSection  display={false} {...InfoData} />*/}
                                        <Box p={2}>
                                             <Typography  variant="h6" variant="h4" >Nos compétences</Typography>
                                        </Box>
                                       
                                          <Grid container>
                                      
                                            {
                                              CompetencesData.map((item,index)=>(
                                                  <Grid key={index} item lg={3} xs={12} >
                                                        <SkillsCard  {...item} />
                                                  </Grid>
                                              ))
                                            }
                            
                                          </Grid>
                                         

                                        <Divider/>
                                       {/* <SectionTitre heading="Notre équipe"/>
                                        <EquipeSection/>*/}
                                        <Divider/>
                                        <FormSection
                                            
                                            id={ContactDetail.id}
                                            lightBg={ContactDetail.lightBg}
                                            lightText={ContactDetail.lightText}
                                            lightTextDesc={ContactDetail.lightTextDesc}
                                            topLine={ContactDetail.topLine}
                                            headLine={ContactDetail.headLine}
                                            description1={ContactDetail.description1}
                                            description2={ContactDetail.description2}
                                            description3={ContactDetail.description3}
                                            description4={ContactDetail.description4}
                                            imgStart={ContactDetail.imgStart}
                                            dark={ContactDetail.dark}
                                            primary={ContactDetail.primary}
                                            darkText={ContactDetail.darkText}
                                          
                                        />
                                      {/*  <Divider/>
                                       
                                        
                                        <Temoignages/>
                                      */}
                                    </Box>
                        </Grid>
               </Container>

           </Box>

        </>
    )
}



export default Apropos
