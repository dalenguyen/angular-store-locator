export interface Marker {
    lat: number;
    lng: number;
    draggable: boolean;
    title: string;
    icon: string;
    street: string;
    city: string;
    state: string;
    postalcode: string;
    email: string;
    phone: string;
    website: string;
    detail?: string;
}
