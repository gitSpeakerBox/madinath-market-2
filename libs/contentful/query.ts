export const brandsQuery = `query {
  brands(id: "6MoLktBi39DqqExzZrKxb5") {
    title
    subtitle
    backgroundImage {
      url
    }
    brandsCollection {
      items {
        title
        image {
          url
        }
      }
    }
  }
}`;
export const servicesQuery = `query {
  services(id: "19c81RUXar3J5ShEgrRO1O") {
    title
    subtitle
    backgroundImage {
      url
    }
    qualitiesCollection {
      items {
        title
        image {
          url
        }
      }
    }
    servicesCollection(limit: 9) {
      items {
        title
        subtitle
        image {
          url
        }
      }
    }
  }
}
`;

export const servicesForHomeQuery = `query {
  services(id: "19c81RUXar3J5ShEgrRO1O") {
    servicesCollection(limit: 11) {
      items {
        title
        subtitle
        image {
          url
        }
      }
    }
  }
}
`;
export const brandsForHomeQuery = `query {
  brands(id :"6MoLktBi39DqqExzZrKxb5") {
    brandsCollection (limit :11) {
      items {
        title
        image {
          url
        }
      }
    }
  }
}`;

export const autoSpaServicesQuery = `query {
  autoSpaServices(id: "7EJ6VixqbVgyfy0NonZSur") {
    title
    subtitle
    backgroundImage {
      url
    }
    services
    carImagesCollection {
      items {
        url
      }
    }
    brandsCollection {
      items {
        url
      }
    }
    contactUsImage {
      url
    }
    luxuryCarSpaServicesCollection {
      items {
        title
        image {
          url
        }
      }
    }
  }
}
`;
export const autoBodyShopQuery = `query {
  autoBodyShop(id: "JFd1nVSJLTTaxnEeM3t1B" ) {
    title
    subtitle
    backgroundImage {
      url
    }
    qualityCollection {
      items {
        title
        image {
          url
        }
      }
    }
    qualityServices {
      title
      textArray
      numberOfBoxes
    }
    contactUsImage {
      url
    }
    glimpseCollection {
      items {
        title
        subtitle
        image {
          url
        }
      }
    }
    
  }
}`;

export const servicesPageQuery = `query {
  servicePagesCollection {
    items {
      sys {
        id
      }
      title
      subtitle
      serviceImg {
        url
      }
      
      url
      heroSection {
        title
        subtitle
        image {
          url
        }
      }
      serviceList {
        title
        textArray
        numberOfBoxes
      }
      checkbook {
        url
      }
      lastPart {
        title
        subtitle
        image {
          url
        }
      }
    }
  }
}
`;
export const tyresPageQuery = `query {
  tyres(id:"2kczcpjATmXYNByNX5Qrua"){
    serviceCollection{
      items{
        title
        image{
          url
        }
      }
    }
  }
}`;

export const engineRepairServiceQuery = `query {
  engineRepairService(id:"5ss7KXrkLtPl8AWA3Lvfww"){
    engineRepair{
      title
      textArray
      numberOfBoxes
    }
    
  }
}`;

export const gearboxRepairServiceQuery = `query {
  gearboxRepairService(id:"4nOfGXqMFAVux9EjLP2rmH"){
    carGearboxServices{
      title
      textArray
      numberOfBoxes
    }
    workshops{
       title
      imagesCollection{
        items{
          url
        }
      }
    }
  }
}`;

export function singleServicePageQuery(id: string) {
  const q = `query {
  servicePages(id:"${id}"){
      sys {
        id
      }
      title
      subtitle
      serviceImg {
        url
      }
      
      url
      heroSection {
        title
        subtitle
        image {
          url
        }
      }
      serviceList {
        title
        textArray
        numberOfBoxes
      }
      checkbook {
        url
      }
      lastPart {
        title
        subtitle
        image {
          url
        }
      }
    }
  
}`;
  return q.toString();
}

export const carUpholsteryQuery =  `query {
  carUpholstery(id:"6h1MxohasBZhieJsCQh8s2"){
    upholsteryServicesCollection{
      items{
        title
        subtitle
        image{
          url
        }
      }
    }
  }
}`

export const intervalServicesQuery =  `query {
  intervalServices(id:"2YhxlJRx4zQUjEIFLrJAmi"){
    minorServices{
      title
      textArray
    }
    majorServices{
      title
      textArray
    }
  }
}`


export const portfolioQuery = `query {
  portfolio(id:"6kST1p7cIcCjoqUGDeqBkc"){
    title
    recentWorking{
      title
      mediaCollection{
        items{
          url
        }
      }
    }
  }
}`