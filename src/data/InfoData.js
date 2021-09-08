import ImageOne from '../images/slide-5.png'
import ImageTwo from '../images/slide-6.jpg'
import ImageThree from '../images/slide-7.jpg'
import ImageFour from '../images/slide-8.jpg'
import ImageComp from '../images/free-setting.png'

export const InfoData = {
    heading: 'Qui sommes-nous ?',
    paragrapheOne:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+ 
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'+ 
    'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'+ 
    'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit'+
    'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'+ 
    'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    buttonLabel:'Voir plus',
    image:ImageOne,
    reverse: false,
    delay:100

}

export const CompetencesData = [
    {
        _id:1,
        categorie:'Nos Compétences',
        titre:'La conception',
        image:ImageComp,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+ 
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'+                  
                    'officia deserunt mollit anim id est laborum.'
                   
    },
    {
        _id:2,
        categorie:'Nos Compétences',
        titre:'L’assistance technique et l’appui',
        image:ImageComp,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+ 
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'+                  
                    'officia deserunt mollit anim id est laborum.'
       
    },
    {
        _id:3,
        categorie:'Nos Compétences',
        titre:'La Maitrise d’œuvre d’exécution',
        image:ImageComp,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+ 
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'+                  
                    'officia deserunt mollit anim id est laborum.'
    },
    
    {
        _id:4,
        categorie:'Nos Compétences',
        titre:'La maîtrise de nos Services',
        image:ImageComp,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+ 
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'+                  
                    'officia deserunt mollit anim id est laborum.'
    }
]

export const InfoActu = [

    {
        _id:1,
        titre:'Lorem Ipsum dolor',
        auteur:'Sed',
        date:'25/06/2021',
        image:ImageOne,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id:2,
        titre:'Labore et dolore magna',
        auteur:'Magna',
        date:'12/06/2021',
        image:ImageTwo,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id:3,
        titre:'Excepteur sint occaecat',
        auteur:'Sint',
        date:'26/06/2021',
        image:ImageThree,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id:4,
        titre:'Dolor sit amet',
        auteur:'Veniam',
        date:'30/06/2021',
        image:ImageFour,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    }
]