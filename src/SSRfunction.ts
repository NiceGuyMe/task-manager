import { GetServerSideProps, GetStaticProps } from "next";

export const getTimeServer: GetStaticProps = async () => {
    const now = new Date();
    const getTime = now.toLocaleString();
    return {
      props: {
        getTime,
      },
    };
  };