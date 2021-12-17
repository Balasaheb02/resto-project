export interface AllRestaurant {
    restaurantName: string;
    restaurantDescription: string;
    restaurantCategory: string;
    restaurantCuisine: string;
    restaurantImage: string;
    isOpen: boolean;
    id: number;
}

export interface RestaurantDetail {
    restaurantName: string;
    restaurantDescription: string;
    restaurantImage: string;
    openingHours: string;
    contactNumber: string;
    websiteUrl: string;
    id: number;
}

export interface Menu {
    itemName: string;
    itemCost: string;
    itemCategory: string;
    itemPhoto: string;
    restaurantName: string;
    id: number;
}

export interface MenuData {
    menu: Menu[];
}

export interface Restaurants {
    allRestaurants: AllRestaurant[];
}

export interface RestaurantDetails {
    restaurantDetail: RestaurantDetail;
}