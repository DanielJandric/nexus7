from sqlalchemy import Column, String, DateTime, Enum, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

from app.db.base_class import Base
from app.api.v1.endpoints.tickets import TicketStatus, TicketPriority, TicketType

class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    property_id = Column(String(36), ForeignKey("properties.id"), nullable=False)
    unit_id = Column(String(36), ForeignKey("units.id"), nullable=True)
    tenant_id = Column(String(36), ForeignKey("users.id"), nullable=False)
    channel = Column(String(50), nullable=False)  # SMS, WhatsApp, Email, Voice
    language = Column(String(2), nullable=False)  # FR, EN, DE
    
    status = Column(Enum(TicketStatus), nullable=False, default=TicketStatus.NEW)
    priority = Column(Enum(TicketPriority), nullable=False, default=TicketPriority.MEDIUM)
    type = Column(Enum(TicketType), nullable=False, default=TicketType.MAINTENANCE)
    
    assigned_to = Column(String(36), ForeignKey("users.id"), nullable=True)
    resolution_time = Column(DateTime, nullable=True)
    
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    property = relationship("Property", back_populates="tickets")
    unit = relationship("Unit", back_populates="tickets")
    tenant = relationship("User", foreign_keys=[tenant_id], back_populates="tenant_tickets")
    assignee = relationship("User", foreign_keys=[assigned_to], back_populates="assigned_tickets")
    
    # Audit trail
    audit_logs = relationship("TicketAuditLog", back_populates="ticket")

class TicketAuditLog(Base):
    __tablename__ = "ticket_audit_logs"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    ticket_id = Column(String(36), ForeignKey("tickets.id"), nullable=False)
    action = Column(String(50), nullable=False)  # created, updated, status_changed, etc.
    old_value = Column(Text, nullable=True)
    new_value = Column(Text, nullable=True)
    performed_by = Column(String(36), ForeignKey("users.id"), nullable=True)
    performed_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    
    # Relationships
    ticket = relationship("Ticket", back_populates="audit_logs")
    user = relationship("User", back_populates="ticket_audit_logs") 