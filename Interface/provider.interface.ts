export interface IProvider{
    id: number;
    name: string;
    expertise: string;
    information: string;
    appointment_type: string;
    photo: string
}

export interface ICreateAppointment{
    provider_id: number;
    duration: string;
    reminder_email: string;
    timestamp: string;
    availability_id: number
}

export interface IProviderInformation{
    id: number;
    name: string;
    expertise: string;
    information: string;
    appointment_type: string;
    photo: string;
    timestamp: string;
    provider_id: number
}
