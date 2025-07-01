I'll create a comprehensive roles matrix for your osquery-based security compliance application. This matrix will define granular permissions for each user role across all application features.

## Security Compliance Application - Roles & Permissions Matrix

### User Roles Overview

**Admin**: Full system access, user management, configuration
**Lead Analyst**: Advanced analysis, team oversight, reporting
**Analyst**: Day-to-day monitoring, investigation, basic reporting**Executive**: High-level dashboards, strategic reports, read-only access

### Detailed Permissions Matrix

#### 1. Dashboard & Overview

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View main dashboard | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Customize dashboard layout | ✅ Write | ✅ Write | ✅ Write | ❌
| Export dashboard data | ✅ Download | ✅ Download | ✅ Download | ✅ Download


#### 2. Device Management

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View device inventory | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Add/register new devices | ✅ Write | ✅ Write | ❌ | ❌
| Edit device information | ✅ Write | ✅ Write | ✅ Write | ❌
| Delete/decommission devices | ✅ Delete | ✅ Delete | ❌ | ❌
| Bulk device operations | ✅ Write | ✅ Write | ❌ | ❌
| Device hardware details | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Export device lists | ✅ Download | ✅ Download | ✅ Download | ✅ Download


#### 3. OS Platform Management

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View OS distribution | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| OS version compliance rules | ✅ Write | ✅ Write | ❌ | ❌
| Update OS compliance policies | ✅ Write | ✅ Write | ❌ | ❌
| OS vulnerability assessments | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Export OS compliance reports | ✅ Download | ✅ Download | ✅ Download | ✅ Download


#### 4. Security Agents Management

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View agent status (CrowdStrike, Qualys, Zscaler, osquery) | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Configure agent policies | ✅ Write | ✅ Write | ❌ | ❌
| Deploy/update agents | ✅ Write | ✅ Write | ❌ | ❌
| Remove agents | ✅ Delete | ✅ Delete | ❌ | ❌
| Agent compliance thresholds | ✅ Write | ✅ Write | ❌ | ❌
| Agent performance metrics | ✅ Read | ✅ Read | ✅ Read | ❌
| Export agent reports | ✅ Download | ✅ Download | ✅ Download | ✅ Download


#### 5. Compliance Monitoring

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View compliance dashboards | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Create compliance rules | ✅ Write | ✅ Write | ❌ | ❌
| Modify compliance rules | ✅ Write | ✅ Write | ❌ | ❌
| Delete compliance rules | ✅ Delete | ✅ Delete | ❌ | ❌
| Compliance exceptions/waivers | ✅ Write | ✅ Write | ❌ | ❌
| Compliance trending analysis | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Export compliance data | ✅ Download | ✅ Download | ✅ Download | ✅ Download


#### 6. Reporting & Analytics

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View standard reports | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Create custom reports | ✅ Write | ✅ Write | ✅ Write | ❌
| Schedule automated reports | ✅ Write | ✅ Write | ❌ | ❌
| Delete reports | ✅ Delete | ✅ Delete | ✅ Delete | ❌
| Executive summary reports | ✅ Read | ✅ Read | ❌ | ✅ Read
| Detailed technical reports | ✅ Read | ✅ Read | ✅ Read | ❌
| Export all report formats | ✅ Download | ✅ Download | ✅ Download | ✅ Download


#### 7. User & Access Management

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View user accounts | ✅ Read | ✅ Read | ❌ | ❌
| Create user accounts | ✅ Write | ❌ | ❌ | ❌
| Modify user permissions | ✅ Write | ❌ | ❌ | ❌
| Delete user accounts | ✅ Delete | ❌ | ❌ | ❌
| View audit logs | ✅ Read | ✅ Read | ❌ | ❌
| Export user activity | ✅ Download | ✅ Download | ❌ | ❌


#### 8. System Configuration

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| osquery configuration | ✅ Write | ❌ | ❌ | ❌
| Data retention policies | ✅ Write | ❌ | ❌ | ❌
| Integration settings | ✅ Write | ❌ | ❌ | ❌
| Backup/restore | ✅ Write | ❌ | ❌ | ❌
| System maintenance | ✅ Write | ❌ | ❌ | ❌


#### 9. Alerts & Notifications

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| View alerts | ✅ Read | ✅ Read | ✅ Read | ✅ Read
| Create alert rules | ✅ Write | ✅ Write | ❌ | ❌
| Modify alert rules | ✅ Write | ✅ Write | ❌ | ❌
| Delete alert rules | ✅ Delete | ✅ Delete | ❌ | ❌
| Acknowledge alerts | ✅ Write | ✅ Write | ✅ Write | ❌
| Alert escalation rules | ✅ Write | ✅ Write | ❌ | ❌


#### 10. Data Export & Integration

| Feature | Admin | Lead Analyst | Analyst | Executive
|-----|-----|-----|-----|-----
| Raw data export | ✅ Download | ✅ Download | ❌ | ❌
| Filtered data export | ✅ Download | ✅ Download | ✅ Download | ✅ Download
| API access | ✅ Read/Write | ✅ Read | ✅ Read | ❌
| Bulk data operations | ✅ Write | ✅ Write | ❌ | ❌
| Third-party integrations | ✅ Write | ❌ | ❌ | ❌


### Implementation Notes

1. **Principle of Least Privilege**: Each role has minimum necessary permissions
2. **Separation of Duties**: Critical operations require appropriate role level
3. **Audit Trail**: All actions should be logged with user attribution
4. **Data Classification**: Sensitive data exports restricted to senior roles
5. **Time-based Access**: Consider implementing session timeouts and re-authentication for sensitive operations


### Recommended Claims Structure

```json
{
  "role": "admin|lead_analyst|analyst|executive",
  "permissions": {
    "devices": ["read", "write", "delete", "download"],
    "compliance": ["read", "write", "delete", "download"],
    "reports": ["read", "write", "delete", "download"],
    "users": ["read", "write", "delete"],
    "system": ["read", "write"],
    "alerts": ["read", "write", "delete"]
  },
  "data_access_level": "full|department|limited|executive_summary"
}
```

This matrix provides a comprehensive foundation for implementing role-based access control in your osquery security compliance application.
