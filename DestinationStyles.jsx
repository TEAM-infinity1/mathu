.destination {
  margin: 4rem 6rem;
}
.destination h1 {
  font-size: 3rem;
}
.first-des {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4.5rem;
}
.first-des-reverse {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 4.5rem;
}
.des-text {
  width: 45%;
  text-align: start;
  font-size: 1.1rem;
}
.des-text h2 {
  padding-bottom: 1rem;
}
.image {
  position: relative;
  width: 50%;
  display: flex;
  justify-content: space-between;
  z-index: -99;
}
.image img {
  width: 49%;
  height: 350px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: -1px 1px -18px black(0, 0, 0.19);
}
.image img:nth-child(2) {
  position: absolute;
  top: -10%;
  right: 0;
}
@media screen and (max-width: 850px) {
  .destination {
    margin: 4rem 2rem;
  }
  .first-des {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
  }
  .first-des-reverse {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 4.5rem;
  }
  .des-text {
    width: 100%;
    margin: 1.8rem 0;
  }
  .image img {
    height: 250px;
  }
}
