package backend.repository;

import org.springframework.data.repository.CrudRepository;
import backend.entity.Event;

import java.sql.Timestamp;
import java.util.Set;

public interface EventRepository extends CrudRepository<Event, Long> {
    Iterable<Event> findEventsByEndEventBefore(Timestamp timestamp);
    Iterable<Event> findEventsByStatusEquals(String status);
}
