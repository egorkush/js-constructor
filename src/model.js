import image from './assets/image.jpg'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

const text = `Cool videos and  JavaScript lessons here: <a class="link-secondary" href="https://www.youtube.com/" target="_blank">https://www.youtube.com/</a> Here you will find comprehensive information on any aspect of the language, any framework such as React, Vue, Angular, Node, Svelte, Express, Next, Nuxt and much more. Join in!`

export const model = [

    new TitleBlock('Website builder on pure JavaScript',{
        tag: 'h2',
        styles: {
            background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(217,117,205,1) 38%, rgba(0,107,129,1) 100%)',
            color: 'white',
            padding: '1.5rem',
            'text-align':'center'
        }}),

    new ImageBlock(image,  {styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
            padding: '0'
        },
        alt: 'This is image'}),


    new ColumnsBlock([
        'Application in pure javascript without the use of libraries',
        'Learn how solid and oop principles work in javascript in one course',
        'Javascript is easy, interesting. Learn how to create any UI with your own hands'
    ], {styles: {
            background: 'radial-gradient(circle, rgba(215,138,172,1) 0%, rgba(40,110,194,1) 100%)',
            padding: '2rem',
            color: 'white',
            'font-weight': 'bold'
        }}),

    new TextBlock(text, {styles: {
            background: '#15dae0',
            padding: '1rem',
            'font-weight': 'bold',
            color: 'white'
        }})

]



