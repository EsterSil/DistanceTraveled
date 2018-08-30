package backend.entity;

import backend.controller.requestbody.EventBody;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Event {
    public Event() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long eventId;
    private String eventName;
    private String eventDiscription;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinColumn(name = "userID")
    private User user;
    private Double latitude;
    private Double longitude;
    private String locationString;//location
    private Timestamp startEvent;
    private Timestamp endEvent;
    private Double userRating; // Double

    private String status = "verify";
    @ManyToMany
    @JoinTable(name = "event_сategory",
            joinColumns = @JoinColumn(name = "eventId"),
            inverseJoinColumns = @JoinColumn(name = "categoryId"))
    private Set<Category> categories = new HashSet<Category>();

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public Event(EventBody eventBody) {
        this.eventName = eventBody.getEventName();
        this.eventDiscription = eventBody.getEventDiscription();
        this.user = eventBody.getUser();
        this.categories = eventBody.getCategorySet();
        this.latitude = eventBody.getLatitude();
        this.longitude = eventBody.getLongitude();
        this.startEvent = eventBody.getStartEvent();
        this.endEvent = eventBody.getEndEvent();
        this.userRating = eventBody.getUserRating();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getEventDiscription() {
        return eventDiscription;
    }

    public void setEventDiscription(String eventDiscription) {
        this.eventDiscription = eventDiscription;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public String getLocationString() {
        return locationString;
    }

    public void setLocationString(String locationString) {
        this.locationString = locationString;
    }

    public Timestamp getStartEvent() {
        return startEvent;
    }

    public void setStartEvent(Timestamp startEvent) {
        this.startEvent = startEvent;
    }

    public Timestamp getEndEvent() {
        return endEvent;
    }

    public void setEndEvent(Timestamp endEvent) {
        this.endEvent = endEvent;
    }

    public Long geteventId() {
        return eventId;
    }

    public void seteventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventId=" + eventId +
                ", eventName='" + eventName + '\'' +
                ", eventDiscription='" + eventDiscription + '\'' +
                ", user=" + user +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", locationString='" + locationString + '\'' +
                ", startEvent=" + startEvent +
                ", endEvent=" + endEvent +
                ", userRating=" + userRating +
                '}';
    }
}
