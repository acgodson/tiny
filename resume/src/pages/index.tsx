import { VStack, Box } from "@chakra-ui/react";
import React from "react";
//@ts-ignore
// import MarkdownIt from 'markdown-it';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownContent = `
# GODSON CHIDUBEM ANI

Email: [anigodson20@gmail.com](mailto:anigodson20@gmail.com) | [Github](https://github.com/acgodson) | [LinkedIn](https://www.linkedin.com/in/godson-ani-369942181/)

---

## SUMMARY

Cross-platform developer, experienced project manager with a passion for leveraging emerging technologies to solve social problems. Award-winning participant in Web3 and AI hackathons. Committed to pushing the boundaries of decentralized technology and achieving impactful change.

---

## EXPERIENCE

**Brooks and Quays Transatlantic Limited | Liverpool, UK**  
*CTO*  
2023 to Present
- Development and implementation of innovative technology solutions for placement services, business and independent contractor collaboration.
- Managing a team of skilled developers and designers and fostering a results-oriented culture that has resulted in the creation of mobile and web software tools for the company.

**Dreampiper.io | Edo State, Nigeria**  
*Co-Founder*  
2022 to Present
- Leading a decentralized autonomous organization (DAO) that brings together creatives and developers to develop sustainable and open-source solutions for social issues, driving impactful change across diverse communities.
- Providing mentorship, guidance, and tutorship to new adopters and early-stage developers.

**Sevrun Integrated Solutions | Edo State, Nigeria**  
*Co-founder/ Web Developer*  
2019 to Present
- Ideating and building an on-demand staffing platform for employers on the web with vanilla JavaScript and Bootstrap, and deploying a Flutter mobile app for job seekers.
- Sponsoring skill-up programs, including a weekly boot camp for introducing computer programming to non-developers in emerging communities.
- Y Combinator startup school graduate, Edo State Social Investment Program incubator, South South Innovation Hub incubator, Inner City Hub incubator.

**Edo Boys High School | Edo State, Nigeria**  
*Computer Science Teacher*  
2022 to March 2023
- Taught computer science courses to 100+ grade 10-12 high school students, leveraging practical teaching methodologies and smart classrooms that resulted in improvement in test scores and extra-curricular interest in coding.
- Onboarded teachers and students on the Nigerian E-learning Passport tablets, a digital learning integrated tablet sponsored by the United Nations and Edo State Government.

**iRx Health Limited | Enugu State, Nigeria**  
*Web Developer*  
2022 to 2022
- Developed, deployed, and maintained company’s MVP e-commerce store for drug delivery, building push notification on Socket.io, creating APIs with Node.JS, and delivering client-side app on React.js.

---

## TECHNICAL EXPERIENCE

| Category                 | Technologies                                                                                             |
|--------------------------|----------------------------------------------------------------------------------------------------------|
| **Web3**                 | Solidity, PyTeal, jsLigo, tealScript, ethers.js, web3.js, web3auth, ceramic, lit-protocol, zkproof, IPFS |
| **Infrastructure & DevOps** | AWS, Firebase, GCloud, AWS CloudFormation                                                              |
| **Programming**          | Dart/Flutter, Javascript, Typescript, Python, Kotlin, React, Next, Node.js                               |
| **Design**               | Figma, Illustrator, Photoshop, Rive, Lottie, Chakra-UI, Tailwind, Material-UI                            |
| **Others**               | MongoDB, MySQL                                                                                           |

---

## EDUCATION

**UNIVERSITY OF BENIN**  
Department of Curriculum & Instructional Tech, B.SC (Ed) 2019/2020

**DOYEN ACADEMY**  
Cambridge Advanced Level Certificate, June 2014

**FEDERAL GOVERNMENT COLLEGE ENUGU**  
West African Examination Council Certificate, June 2013

---

## OTHER CERTIFICATIONS & ACHIEVEMENTS

1. South South Innovation Hub Idea/Coding Hackathon | 2019: Finalist
2. Tezos BlockBorn Gaming Hackathon | 2022: 1st Place
3. Algorand Greenhouse Hackathon | 2022: 1st Place
4. Privy, EthCC Hack Paris | 2022: 2nd Place
5. Nigerian National Youth Service Corps (NYSC) | 2022
6. Hedera Boston Climate Hackathon | 2023: 2nd Place, Best Guardian Tool
7. Chainlink Constellation Hackathon | 2023: Best use of Ethereum Name Service (ENS)
8. Dfinity Grant Recipient, London AI Hackathon | 2023
9. EthGlobal London | 2023: Prize Winner
10. EthGlobal Frameworks Hackathons | 2023
11. Scaling Web3 Hackathon | 2023: Best use of IPC
12. Avalanche Frontier Hackathon | 2023: Best use of Covalent and Chainlink

---
`;

export default function Home() {
  // const htmlContent = md.render(markdownContent);
  return (
    <VStack
      bg="white"
      w="100%"
      minH={"100vh"}
      justifyContent={"center"}
      px={[3, 3, 32]}
    >
      <Box
        as="div"
        bg="whitesmoke"
        color={"#333"}
        maxW={"900px"}
        className="markdown-body"
      >
        <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
      </Box>

      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
    </VStack>
  );
}
