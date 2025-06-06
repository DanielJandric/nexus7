from fastapi import APIRouter
from .endpoints import tickets, users, properties, maintenance, concierge

router = APIRouter()

# Include all endpoint routers
router.include_router(tickets.router, prefix="/tickets", tags=["tickets"])
router.include_router(users.router, prefix="/users", tags=["users"])
router.include_router(properties.router, prefix="/properties", tags=["properties"])
router.include_router(maintenance.router, prefix="/maintenance", tags=["maintenance"])
router.include_router(concierge.router, prefix="/concierge", tags=["concierge"]) 