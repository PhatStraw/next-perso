import React from "react"

import {
  FaGithubSquare,
  FaEnvelope,
  FaLaptop,
  FaGithub,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
import { IconContext } from "react-icons"

import { getStaticContent } from '@tipe/next'


export default function Home({ page }) {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <div style={{ width: "90%", padding: "0", margin: 'auto' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>{page.fields.title}</h1>
          <h2>{page.fields.subTitle}</h2>
          <p className="main-p">
            {page.fields.description}
          </p>

          <h2 style={{fontSize: '30px'}}>{page.fields.socialDescription}</h2>
          <IconContext.Provider
            value={{ size: "36px", className: "global-class-name" }}
          >
            <div className="icons">
              <a href="https://github.com/phatstraw" className="ghIcon">
                <FaGithubSquare />
              </a>
              <a href="mailto:Kevindsims1@gmail.com" className="ghIcon">
                <FaEnvelope />
              </a>
              <a href="https://twitter.com/kevsmss" className="ghIcon">
                <FaTwitterSquare />
              </a>
              <a href="https://www.instagram.com/javascriptplus/" className="ghIcon">
                <FaInstagramSquare />
              </a>
            </div>
          </IconContext.Provider>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2>{page.fields.blogDescription}</h2>
              
              <div style={{ display: "flex", flexDirection: "row", maxWidth: '800px', maxHeight: '100px', flexWrap: 'wrap', overflow: 'scroll', margin: 0, padding: 0 }}>
                {page.fields.blogs.map(i =>{
                 return( 
                  <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                        backgroundColor: "#7D7981",
                        maxWidth: "400px",
                        width: "350px",
                        height: "85px",
                        margin: '0 1rem 1rem 0',
                        padding: 0
                      }}
                    >
                        <div style={{ padding: "2px 16px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height: '90%'}}>
                        <h3>{i.value.title}</h3>
                        <button
                          style={{ backgroundColor: "black", color: "#7D7981", width: '100px' }}
                          src={`${i.value.src}`}
                        >
                          {i.value.button}
                        </button>
                      </div>
                    </div>
                 )
              })}
              

              </div>
            </div>
            <div>
              <h2>{page.fields.musicDescription}</h2>
              <iframe
                src="https://open.spotify.com/embed/playlist/0NUtHPgeWm833NU14csQZi"
                width="328"
                height="80"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(ctx) {
  const { props } = await getStaticContent({
    query: { type: 'homePage', limit: 1 },
  })(ctx)

  return {
    props: {
      page: props.documents[0],
    },
  }
}
