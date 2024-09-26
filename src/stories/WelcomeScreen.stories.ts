import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SearchAdsCardBody } from "../components/common/SearchAdsCardBody";
import { WelcomeScreen } from "../components/welcomeScreen/WelcomeScreen";
const ActionsData = {};

const meta: Meta<typeof WelcomeScreen> = {
  title: "Native App/WelcomeScreen/WelcomeScreen",
  component: WelcomeScreen,
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

type Story = StoryObj<typeof WelcomeScreen>;

export const SearchAds: Story = {
  args: {
    heading: "Welcome to Houseware",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customCardBody: React.createElement(SearchAdsCardBody, {
      handleSendMessage: () => {},
      handleChangeCountry: () => {},
      handleChangeLanguage: () => {},
      inputPlaceholder: "Somethign",
      countries: [
        { value: "oman", label: "Oman" },
        { value: "namibia", label: "Namibia" },
        { value: "nauru", label: "Nauru" },
        { value: "nepal", label: "Nepal" },
        { value: "netherlands", label: "Netherlands" },
        { value: "curacao", label: "Curacao" },
        { value: "sint maarten", label: "Sint Maarten" },
        { value: "caribbean netherlands", label: "Caribbean Netherlands" },
        { value: "new caledonia", label: "New Caledonia" },
        { value: "vanuatu", label: "Vanuatu" },
        { value: "new zealand", label: "New Zealand" },
        { value: "nicaragua", label: "Nicaragua" },
        { value: "niger", label: "Niger" },
        { value: "nigeria", label: "Nigeria" },
        { value: "niue", label: "Niue" },
        { value: "norfolk island", label: "Norfolk Island" },
        { value: "norway", label: "Norway" },
        {
          value: "northern mariana islands",
          label: "Northern Mariana Islands",
        },
        {
          value: "united states minor outlying islands",
          label: "United States Minor Outlying Islands",
        },
        { value: "micronesia", label: "Micronesia" },
        { value: "marshall islands", label: "Marshall Islands" },
        { value: "palau", label: "Palau" },
        { value: "pakistan", label: "Pakistan" },
        { value: "panama", label: "Panama" },
        { value: "papua new guinea", label: "Papua New Guinea" },
        { value: "paraguay", label: "Paraguay" },
        { value: "peru", label: "Peru" },
        { value: "philippines", label: "Philippines" },
        { value: "pitcairn islands", label: "Pitcairn Islands" },
        { value: "poland", label: "Poland" },
        { value: "portugal", label: "Portugal" },
        { value: "guinea-bissau", label: "Guinea-Bissau" },
        { value: "timor-leste", label: "Timor-Leste" },
        { value: "qatar", label: "Qatar" },
        { value: "romania", label: "Romania" },
        { value: "russia", label: "Russia" },
        { value: "rwanda", label: "Rwanda" },
        { value: "saint barthelemy", label: "Saint Barthelemy" },
        {
          value: "saint helena, ascension and tristan da cunha",
          label: "Saint Helena, Ascension and Tristan da Cunha",
        },
        { value: "saint kitts and nevis", label: "Saint Kitts and Nevis" },
        { value: "saint lucia", label: "Saint Lucia" },
        { value: "saint martin", label: "Saint Martin" },
        {
          value: "saint pierre and miquelon",
          label: "Saint Pierre and Miquelon",
        },
        {
          value: "saint vincent and the grenadines",
          label: "Saint Vincent and the Grenadines",
        },
        { value: "san marino", label: "San Marino" },
        { value: "sao tome and principe", label: "Sao Tome and Principe" },
        { value: "saudi arabia", label: "Saudi Arabia" },
        { value: "senegal", label: "Senegal" },
        { value: "serbia", label: "Serbia" },
        { value: "seychelles", label: "Seychelles" },
        { value: "sierra leone", label: "Sierra Leone" },
        { value: "singapore", label: "Singapore" },
        { value: "slovakia", label: "Slovakia" },
        { value: "vietnam", label: "Vietnam" },
        { value: "slovenia", label: "Slovenia" },
        { value: "somalia", label: "Somalia" },
        { value: "south africa", label: "South Africa" },
        { value: "zimbabwe", label: "Zimbabwe" },
        { value: "spain", label: "Spain" },
        { value: "south sudan", label: "South Sudan" },
        { value: "sudan", label: "Sudan" },
        { value: "suriname", label: "Suriname" },
        { value: "eswatini", label: "Eswatini" },
        { value: "sweden", label: "Sweden" },
        { value: "switzerland", label: "Switzerland" },
        { value: "tajikistan", label: "Tajikistan" },
        { value: "thailand", label: "Thailand" },
        { value: "togo", label: "Togo" },
        { value: "tokelau", label: "Tokelau" },
        { value: "tonga", label: "Tonga" },
        { value: "trinidad and tobago", label: "Trinidad and Tobago" },
        { value: "united arab emirates", label: "United Arab Emirates" },
        { value: "tunisia", label: "Tunisia" },
        { value: "turkiye", label: "Turkiye" },
        { value: "turkmenistan", label: "Turkmenistan" },
        { value: "tuvalu", label: "Tuvalu" },
        { value: "uganda", label: "Uganda" },
        { value: "ukraine", label: "Ukraine" },
        { value: "north macedonia", label: "North Macedonia" },
        { value: "egypt", label: "Egypt" },
        { value: "united kingdom", label: "United Kingdom" },
        { value: "guernsey", label: "Guernsey" },
        { value: "jersey", label: "Jersey" },
        { value: "isle of man", label: "Isle of Man" },
        { value: "tanzania", label: "Tanzania" },
        { value: "united states", label: "United States" },
        { value: "burkina faso", label: "Burkina Faso" },
        { value: "uruguay", label: "Uruguay" },
        { value: "uzbekistan", label: "Uzbekistan" },
        { value: "venezuela", label: "Venezuela" },
        { value: "wallis and futuna", label: "Wallis and Futuna" },
        { value: "samoa", label: "Samoa" },
        { value: "yemen", label: "Yemen" },
        { value: "zambia", label: "Zambia" },
      ],
      languages: [
        { value: "mozambique", label: "Mozambique" },
        { value: "oman", label: "Oman" },
        { value: "namibia", label: "Namibia" },
        { value: "nauru", label: "Nauru" },
        { value: "nepal", label: "Nepal" },
      ],
      countrySelected: "united arab emirates",
      languageSelected: "oman",
    }),
  },
};
