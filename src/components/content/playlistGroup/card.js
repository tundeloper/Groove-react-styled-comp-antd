import React from "react";
import styled from "styled-components";

export default function App({ className }) {
  const artiste = [
    {
      id: "c1",
      tittle: "Daily Vibes 1",
      imageUrl: "/damini.png",
      description: "Burna Boy, Oxlade, Davido, Terms Wizkid, Tiwa Savage....",
      background: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
      backDrop: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
    },
    {
      id: "c2",
      tittle: "Daily Vibes 2",
      imageUrl: "/cover.png",
      description: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay SGwad...",
      background: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
      backDrop: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    },
    {
      id: "c3",
      tittle: "Daily Vibes 3",
      imageUrl: "/covergi.png",
      description: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
      background: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
      backDrop: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
    },
    {
      id: "c4",
      tittle: "Daily Vibes 1",
      imageUrl: "/damini.png",
      description: "Burna Boy, Oxlade, Davido, Terms Wizkid, Tiwa Savage....",
      background: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
      backDrop: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
    },
    {
      id: "c5",
      tittle: "Daily Vibes 2",
      imageUrl: "/cover.png",
      description: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay SGwad...",
      background: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
      backDrop: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    },
    {
      id: "c6",
      tittle: "Daily Vibes 3",
      imageUrl: "/covergi.png",
      description: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
      background: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
      backDrop: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
    },
    {
      id: "c5",
      tittle: "Daily Vibes 2",
      imageUrl: "/cover.png",
      description: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay SGwad...",
      background: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
      backDrop: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    },
    {
      id: "c6",
      tittle: "Daily Vibes 3",
      imageUrl: "/covergi.png",
      description: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
      background: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
      backDrop: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
    },
  ];
  return (
    <ul className={className}>
      {artiste.map((item, index) => (
        <li key={index}>
          <div className="backdrops">
            <div style={{ background: item.backDrop }} />
            <div style={{ background: item.backDrop }} />
          </div>
          <div className="playlist-cover">
            <div className="playl">
              <img src={item.imageUrl} alt="playlist_image" />
            </div>
          </div>

          <div className="desc" style={{ background: item.background }}>
            <div className="desc_title">{item.tittle}</div>
            <div className="desc_label">{item.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export const PlaylistCard = styled(App)`
  display: flex;
  gap: 1rem;
  width: max-content;

  li {
    width: 15rem;
    height: 18rem;
    border: 1px solid #252424;
    padding: 2rem 0;
    position: relative;
    overflow: hidden;

    &:last-child {
      margin-right: 1rem;
    }
  }

  .backdrops {
    width: 100%;

    div {
      width: 2rem;
      height: 12rem;
      /* width: 100%; */
      margin-top: 2rem;
      float: left;

      &:last-child {
        float: right;
      }
    }
  }

  .card-text {
    display: flex;
    flex-direction: column;
  }

  .playlist-cover {
    height: 13rem;
    width: 72%;
    left: 50%;
    background: ${(props) => props.theme.color.darkColor};
    transform: translate(-50%);
    position: absolute;
    padding: 5px 8px 15px;
    border: 1.5px solid #252424;
    z-index: 1;

    div {
      img {
        width: 100%;
        /* height: 9.5rem; */
      }
    }
  }
  .desc {
    position: absolute;
    bottom: 1.2rem;
    width: 100%;
    height: 6.5rem;
    z-index: 2;
    padding-left: 1.2rem;

    &_title {
      padding-top: 1rem;
      padding-bottom: 0.5rem;
      font-weight: 700;
      font-size: 1.2rem;
    }

    &_label {
      font-weight: 100;
      padding-right: 0.5rem;
    }
  }
`;
