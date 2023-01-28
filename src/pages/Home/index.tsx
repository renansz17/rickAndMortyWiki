import soloPortal from '../../assets/images/soloPortal.png'
import logoRick from '../../assets/images/logoRick.png'
import rickAndMorty from '../../assets/images/rickAndMorty.png'
import { Divider, MainContainer, TextContainer } from './styles'
import { motion } from 'framer-motion'

export function Home() {
  return (
    <MainContainer>
      <div>
        <Divider>
          <motion.div style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.img
              style={{
                width: '680px',
              }}
              src={soloPortal}
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            />
            <motion.img
              src={logoRick}
              style={{
                position: 'absolute',
                top: '100px',
                left: '20px',
                width: '680px',
              }}
            />
            <motion.img
              src={rickAndMorty}
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '12px',
                width: '680px',
              }}
            />
          </motion.div>
          <TextContainer>
            {/* <h1>
              Feito de um fã <br /> para fans{' '}
            </h1>
            <p>
              Explore mais o mundo de Rick and Morty, vendo onde seus
              personagens moram, quantos anos tem ou até mesmo se estão vivos ou
              mortos...
            </p> */}
          </TextContainer>
        </Divider>
      </div>
    </MainContainer>
  )
}
