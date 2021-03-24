export interface Business {
  business_id: string;
  name: string;
  desc: string;
  key?: string;
}

export const createBusiness = (): Business => ({
  business_id: "",
  name: "",
  desc: "",
});
