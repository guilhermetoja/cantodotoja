import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>Primeira postagem!</title>
      </Head>
      <h1> Primeira postagem!</h1>
      <h2>
        <Link href="/">Voltar a home</Link>
      </h2>
    </div>
  );
}
