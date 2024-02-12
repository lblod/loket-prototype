import Controller from '@ember/controller';
const { productData } = require('../products');
const { subsidiesData } = require('../subsidies');

export default class DashboardSearchController extends Controller {
  product = productData;
  subsidies = subsidiesData;
  // subsidies = [
  //   {
  //     name: 'Lokale Producten- en Dienstencatalogus',
  //     description: 'Beheer uw lokale producten en diensten',
  //     link: '#!',
  //     type: 'Tool',
  //   },
  //   {
  //     name: 'Loket voor Authentieke Registratie',
  //     description: 'Steden en gemeenten kunnen hier het beheer doen van Adressen, Gebouwen en Wegen en zo hun decretale verplichtingen vervullen',
  //     link: '#!',
  //     type: 'Tool',
  //   },
  //   {
  //     name: 'Erfgoedpremie voor beschermde monumenten en landschappen',
  //     description: 'Wanneer uw onroerend goed, gelegen in het Vlaamse Gewest, beschermd is als monument of landschap, kunt u in aanmerking komen voor de Vlaamse erfgoedpremie',
  //     link: '#!',
  //     type: 'Premie',
  //   },
  //   {
  //     name: 'Gemeente- en Stadsmonitor',
  //     description: "Jouw gemeente gevat in 40 cijfers uit de Gemeente-Stadsmonitor! Meer weten? Klik door en duik dieper in een specifiek thema, download het rapport ‘Jouw gemeentescan’ of stel je eigen indicatorenset samen",
  //     link: '#!',
  //     type: 'Databron',
  //   },
  //   {
  //     name: 'Mandatenbeheer',
  //     description: "Hou de mandaten binnen de gemeenten, OCMW's, districten en provincies bij",
  //     link: '#!',
  //     type: 'Tool',
  //   },
  //   {
  //     name: 'Beurs Lokaal Bestuurlijk Talent',
  //     description: "De toekomst is lokaal. Om die te vrijwaren moeten we het lokale bestuursniveau versterken en dat vereist een sterk management. Deze beurs financiert gedeeltelijk masteropleidingen in management voor lokale personeelsleden met managementtalent zodat zij voldoende kansen krijgen om door te groeien binnen hun lokale of provinciale bestuur",
  //     link: '#!',
  //     deadline: '31 januari 2024',
  //     type: 'Premie',
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 2.0',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vvsg.be/kennisitem/vvsg/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     type: 'Subsidie',
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 1.0',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     type: 'Subsidie',
  //     favorite: 'true',
  //   },
  //   {
  //     name: 'Opknapwerken slaapplekken Oekraïne',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vlaanderen.be/vlaanderen-helpt-oekraine/financiering',
  //     deadline: '31 mei 2024',
  //     type: 'Subsidie',
  //     favorite: 'true',
  //   },
  //   {
  //     name: 'Subsidie voor Hoppinpunten',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-de-aanleg-of-herinrichting-van-een-hoppinpunt',
  //     type: 'Subsidie',
  //     favorite: 'true',
  //   },
  //   {
  //     name: 'Subsidie voor het toegankelijk aanleggen of herinrichten van haltes en de uitrusting van haltes',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-het-toegankelijk-aanleggen-of-herinrichten-van-haltes-en-de-uitrusting-van-haltes',
  //     type: 'Subsidie',
  //     favorite: 'true',
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 2.0',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vvsg.be/kennisitem/vvsg/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     type: 'Subsidie',
  //     favorite: 'true',
  //   },
  //   {
  //     name: 'Lokaal Energie- en Klimaatpact 1.0',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'http://www.vvsg.be/netwerkklimaat/lokaal-energie-en-klimaatpact',
  //     deadline: '06 december 2023',
  //     type: 'Subsidie',
  //     favorite: 'true',
  //   },
  //   {
  //     name: 'Opknapwerken slaapplekken Oekraïne',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vlaanderen.be/vlaanderen-helpt-oekraine/financiering',
  //     deadline: '31 mei 2024',
  //     type: 'Subsidie',
  //   },
  //   {
  //     name: 'Subsidie voor Hoppinpunten',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-de-aanleg-of-herinrichting-van-een-hoppinpunt',
  //     type: 'Subsidie',
  //   },
  //   {
  //     name: 'Subsidie voor het toegankelijk aanleggen of herinrichten van haltes en de uitrusting van haltes',
  //     description: 'Gemeentebesturen zijn verplicht om hun mandaten door te geven aan de Vlaamse Overheid.',
  //     link: 'https://www.vlaanderen.be/subsidies-voor-het-toegankelijk-aanleggen-of-herinrichten-van-haltes-en-de-uitrusting-van-haltes',
  //     type: 'Subsidie',
  //   },
  // ];
}
