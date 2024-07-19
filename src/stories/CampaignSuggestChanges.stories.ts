import { Meta, StoryObj } from "@storybook/react";
import { CampaignSuggestChangesScreen } from "../components/chatScreen/CampaignSuggestChanges";

const ActionsData = {};

const meta: Meta<typeof CampaignSuggestChangesScreen> = {
  title: "Native App/ChatScreen/CampaignSuggestChanges",
  component: CampaignSuggestChangesScreen,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {
    ...ActionsData,
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;

type Story = StoryObj<typeof CampaignSuggestChangesScreen>;

export const Default: Story = {
  args: {
    campaignName: "Something",
    keywordsSelected: ["keyword1", "keyword2"],
    languageSelected: "English",
    countrySelected: "USA",
    suggestions: `# Qui nox similis Phoebi

## Labens utque pone undis

Lorem markdownum minus Hactenus; avia misit, tyranni metu inquit pocula, videre
est optime sidereos. Annis [dat nec virgo](http://chlamydemque-temptatos.com/)
habenas, Tatiumque est nec, in et, exiguamque haut committitur tenebat.

- Diana arduus tamen erat albentes reduxi tristis
- Vulnere gerat ossa alas stabat domos imperet
- Tu marcida dissidet
- Versis tenentibus tura hoc quod priore cupioque
- Spumantia domumque hoc fuit ferrum adunca calcitrat

## Visa iussit faciemque si utimur fortia clamore

Et redit *si invadere agros* in esse erat In, nec per fugit et cum? Est in
[an](http://www.axe.net/), nisi ara adgrediar rapax sucis hanc armis Cycnus
foret sacri premens serpentis.

- Arreptum Ceyx vertice alta cadat vacuas aula
- Hora parvum mihi Herculeis illos
- Tradit otia ante
- Multo recta
- Morte putares parvo Tiberinaque purpureum licet

## Virgo accedere lilia ministris praeterita ligno

O sic legeret infelix; siquid officiis superbum virum cruorem. Opem thalami
pudor honore luminis, simulacra, margine auras arcitenens iacet cervice
penetralia ferox cognoscere frena. Laeter dixit. Mors post et Cycneia victor
nebulasque ausa ereptus in beati, sed gratamque quibus nymphis mea sequitur.
Pars fuit, primordia praerupit **cantu**.

## Potens pede arboribus omnia

Limine aspexit tu substiterat in voce silentia capiebant, arce. In recentes
**nemus** et passa Pactolides percussis dumque. Est enim venerande dira
pavetque. Aras ramis videt somno, sinus aurem, diu lentae nam nivibus, iamque
magnanimo.

Animumque eripere oculos! Pignora fas, nec subita, in cutis, **quotiens**, nova
seque digitos dolorem de factis trepidare copia.
`,
  },
};
