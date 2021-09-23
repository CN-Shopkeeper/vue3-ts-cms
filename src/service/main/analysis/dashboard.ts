import skRequest from "@/service";
import { IDataType } from "@/service/type";

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

export function getCategoryGoodsCount() {
  return skRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  });
}

export function getCategoryGoodsSale() {
  return skRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  });
}

export function getCategoryGoodsFavor() {
  return skRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  });
}

export function getAddressGoodsSale() {
  return skRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  });
}
