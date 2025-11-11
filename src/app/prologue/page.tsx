/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Prologue - Chronique des Premiers Hommes',
  description:
    "Découvrez le premier chapitre de Chronique des Premiers Hommes : Tukum, le chasseur face au grand loup noir.",
}

export default function Prologue() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Chapitre 1 : Tukum
        </h1>

        <div className="prose prose-zinc mt-8 dark:prose-invert">
          <p>
            Lentement, le chasseur banda son arc. Le grand loup noir ne
            l'avait pas encore entendu approcher. Assis, il contemplait son
            propre royaume. Le vent soufflait sur son pelage et sa truffe ne
            cessait de remuer. Bien que paisible, il avait l'air anxieux.
            L'idée de lui ôter la vie lui noua l'estomac.
          </p>

          <p>
            Tukum n'aimait pas tuer un chasseur, et encore moins le loup.
            Mais l'hiver avait fait fuir les rennes et le trappeur voulait sa
            fourrure. C'était un mâle adulte. Il appartenait certainement à
            une meute. Au vu de sa corpulence, il en était sans doute le chef,
            peut-être même père de plusieurs louveteaux.
          </p>

          <p>
            Le cœur de l'homme se serra à cette tournure. Lui qui rêvait
            d'être père, il s'apprêtait à faire des orphelins.
          </p>

          <p>
            Soudain, le loup se leva, la queue pointée vers l'avant et la
            fourrure hérissée. D'un bond rapide, il allait s'enfoncer dans la
            forêt lorsqu'il marqua un temps d'arrêt pour fixer l'homme qui
            pointait une flèche sur son cœur.
          </p>

          <p>
            Tukum était démasqué. Cela ne lui était jamais arrivé. Pourtant,
            il ne vit aucune crainte ni surprise dans les yeux du loup. Au
            contraire, il y décela de la bienveillance, tel un sourire donné à
            un ami.
          </p>

          <p>
            Le chasseur se sentait envahi par la honte. Comment aurait-il pu
            le tuer ?
          </p>

          <hr className="my-8" />

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            <em>Chronique des Premiers Hommes - Tome 1 : L'Éveil des Âmes</em>
          </p>
        </div>
      </div>
    </Container>
  )
}
