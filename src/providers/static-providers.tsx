/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { citiesType, staticType } from "@/utils/types";
import { getApiUrl } from "@/utils/constants";
import { getRequest } from "@/utils/axios-request";

const citiesUrl = getApiUrl("CITIES");
const cardTypesUrl = getApiUrl("CARD_TYPES");
const accountTypesUrl = getApiUrl("ACCOUNT_TYPES");
const addressTypesUrl = getApiUrl("ADDRESS_TYPES");
const accountStatusUrl = getApiUrl("ACCOUNT_STATUS");
const gendersUrl = getApiUrl("GENDERS");
const marritialStatusUrl = getApiUrl("MARRITIAL_STATUS");
const questionsUrl = getApiUrl("QUESTIONS");
const transactionTypesUrl = getApiUrl("TRANSACTION_TYPES");
const relationshipUrl = getApiUrl("RELATIONSHIP");

interface StaticContextType {
  cities: citiesType | null;
  cardTypes: staticType | null;
  accountTypes: staticType | null;
  addressTypes: staticType | null;
  accountStatus: staticType | null;
  genders: staticType | null;
  marritialStatus: staticType | null;
  questions: staticType | null;
  transactionTypes: staticType | null;
  relationship: staticType | null;
  getCities: () => Promise<void>;
  getCardTypes: () => Promise<void>;
  getAccountTypes: () => Promise<void>;
  getAddressTypes: () => Promise<void>;
  getAccountStatus: () => Promise<void>;
  getGenders: () => Promise<void>;
  getMarritialStatus: () => Promise<void>;
  getQuestions: () => Promise<void>;
  getTransactionTypes: () => Promise<void>;
  getRelationship: () => Promise<void>;
}

const StaticContext = createContext<StaticContextType | null>(null);

export const StaticProvider = ({ children }: { children: React.ReactNode }) => {
  const [cities, setCities] = useState(null);
  const [cardTypes, setCardTypes] = useState(null);
  const [accountTypes, setAccountTypes] = useState(null);
  const [addressTypes, setAddressTypes] = useState(null);
  const [accountStatus, setAccountStatus] = useState(null);
  const [genders, setGenders] = useState(null);
  const [marritialStatus, setMarritialStatus] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [transactionTypes, setTransactionTypes] = useState(null);
  const [relationship, setRelationship] = useState(null);

  /**
   * Get Cities List
   */
  const getCities = async () => {
    const response = await getRequest(citiesUrl, null, false, null);
    if (response?.status === 200) {
      setCities(response?.data);
    }
  };
  /**
   * Get Card Types
   */
  const getCardTypes = async () => {
    const response = await getRequest(cardTypesUrl, null, false, null);
    if (response?.status === 200) {
      setCardTypes(response?.data);
    }
  };

  /**
   * Get Account Types
   */
  const getAccountTypes = async () => {
    const response = await getRequest(accountTypesUrl, null, false, null);
    if (response?.status === 200) {
      setAccountTypes(response?.data);
    }
  };

  /**
   * Get Address Types
   */
  const getAddressTypes = async () => {
    const response = await getRequest(addressTypesUrl, null, false, null);
    if (response?.status === 200) {
      setAddressTypes(response?.data);
    }
  };

  /**
   * Get Account Status
   */
  const getAccountStatus = async () => {
    const response = await getRequest(accountStatusUrl, null, false, null);
    if (response?.status === 200) {
      setAccountStatus(response?.data);
    }
  };

  /**
   * Get Genders
   */
  const getGenders = async () => {
    const response = await getRequest(gendersUrl, null, false, null);
    if (response?.status === 200) {
      setGenders(response?.data);
    }
  };

  /**
   * Get Marritial Status
   */
  const getMarritialStatus = async () => {
    const response = await getRequest(marritialStatusUrl, null, false, null);
    if (response?.status === 200) {
      setMarritialStatus(response?.data);
    }
  };

  /**
   * Get Questions
   */
  const getQuestions = async () => {
    const response = await getRequest(questionsUrl, null, false, null);
    if (response?.status === 200) {
      setQuestions(response?.data);
    }
  };

  /**
   * Get Transaction Types
   */
  const getTransactionTypes = async () => {
    const response = await getRequest(transactionTypesUrl, null, false, null);
    if (response?.status === 200) {
      setTransactionTypes(response?.data);
    }
  };

  /**
   * Get Relationship
   */
  const getRelationship = async () => {
    const response = await getRequest(relationshipUrl, null, false, null);
    if (response?.status === 200) {
      setRelationship(response?.data);
    }
  };

  const data = {
    cities,
    cardTypes,
    accountStatus,
    accountTypes,
    addressTypes,
    genders,
    marritialStatus,
    questions,
    transactionTypes,
    relationship,
    getCities,
    getCardTypes,
    getAccountTypes,
    getAddressTypes,
    getAccountStatus,
    getGenders,
    getMarritialStatus,
    getQuestions,
    getTransactionTypes,
    getRelationship,
  };
  return (
    <StaticContext.Provider value={data}>{children}</StaticContext.Provider>
  );
};

export const useStaticContext = () => {
  const context = useContext(StaticContext);
  if (!context) {
    throw new Error("useUtilsContext must be used within a StaticProvider");
  }
  return context;
};
