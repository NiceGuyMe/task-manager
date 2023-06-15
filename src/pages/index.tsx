import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { getTimeServer } from "../SSRfunction";

/**
  Calculates the time difference between the server time and client time.
  @param {Date} serverTime - The server time.
  @param {Date} clientTime - The client time.
  @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
*/

const calculateTimeDifference = (server: string, client: string) => {
  const serverTime = new Date(server);
  const clientTime = new Date(client);

  const diff = serverTime.getTime() - clientTime.getTime();

  // Convert the difference in milliseconds to days, hours, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const seconds = Math.floor((diff % (1000 * 60 * 60)) / 1000);
  const minutes = Math.floor(seconds / 60);
  return ` ${days} days, ${hours} hours, ${minutes} minutes,  ${seconds} seconds`;
};

const clientTime = () => {
  const now = new Date();
  const getTime = now.toLocaleString();
  return getTime;
};

export default function Home({ getTime }: any) {
  const router = useRouter();
  const moveToTaskManager = () => {
    router.push("/tasks");
  };
  return (
    <>
      <Head>
        <title>Web 2 - Exam TD</title>
        <meta name="description" content="Just an exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>The easiest exam you will ever find</h1>
        <div>
          {/* Display here the server time (DD-MM-AAAA HH:mm)*/}
          <p>
            Server time: <span className="serverTime">{getTime}</span>
          </p>

          {/* Display here the time difference between the server side and the client side */}
          <p>
            Time diff:
            <span className="serverTime">
              {calculateTimeDifference(clientTime(), getTime)}
            </span>
          </p>
        </div>

        <div>
          <button onClick={moveToTaskManager}>Go to task manager</button>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = getTimeServer;
