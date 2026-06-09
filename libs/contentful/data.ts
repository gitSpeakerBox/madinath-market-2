"use server";
import { accessToken, spaceId } from "./client";
import {
  autoBodyShopQuery,
  autoSpaServicesQuery,
  brandsForHomeQuery,
  brandsQuery,
  carUpholsteryQuery,
  engineRepairServiceQuery,
  gearboxRepairServiceQuery,
  intervalServicesQuery,
  portfolioQuery,
  servicesForHomeQuery,
  servicesPageQuery,
  servicesQuery,
  singleServicePageQuery,
  tyresPageQuery,
} from "./query";

const URL = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

const headers = {
  "content-type": "application/json",
  authorization: `Bearer ${accessToken}`,
};

type ParamsProps = {
  slug?: string;
  type:
    | "brands"
    | "brandsForHome"
    | "autoSpaService"
    | "servicesForHome"
    | "services"
    | "autoBodyShop"
    | "servicesPages"
    | "tyresPage"
    | "engineRepairPage"
    | "gearboxRepairServicePage"
    | "carUpholstery"
    |"intervalServices"
    |"portfolio"
};

export async function getData({ type, slug }: ParamsProps) {
  const useQuery = {
    brands: brandsQuery,
    brandsForHome: brandsForHomeQuery,
    autoSpaService: autoSpaServicesQuery,
    servicesForHome: servicesForHomeQuery,
    services: servicesQuery,
    autoBodyShop: autoBodyShopQuery,
    servicesPages: servicesPageQuery,
    tyresPage: tyresPageQuery,
    engineRepairPage: engineRepairServiceQuery,
    gearboxRepairServicePage: gearboxRepairServiceQuery,
    carUpholstery: carUpholsteryQuery,
    intervalServices:intervalServicesQuery,
    portfolio:portfolioQuery
  };

  const query = useQuery[type];

  const res = await fetch(URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: query }),
    cache: "no-store",
  });
  if (!res.ok) return;

  return res.json();
}

export async function getServiceDataById(id: string) {
  const res = await fetch(URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: singleServicePageQuery(id),
    }),
    cache: "no-store",
  });
  return await res.json();
}
