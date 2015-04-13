# RfidFittingRoom

## API Endpoints

Method | Route  | Request | Response
------------- |------------- |------------- | -------------
GET | /rfid | - | [Product](###Product) |
POST | /rfid | [Rfid](###Product) | [Product](###Product) |

## Models

### Rfid

```javascript
{
	id: int
}
```

### Product

```javascript
{
	id: int,
    name: string,
    description: string,
    price: float,
    imageUrl: string,
    image: string
    relatedProducts: [Product]
}
```
